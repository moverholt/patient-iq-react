// @flow

import { createFragmentContainer } from 'react-relay';
import {
  Button,
  FormGroup,
  InputGroup,
  Card,
  Elevation,
} from "@blueprintjs/core";
import UpdateEmployeeMutation from '../Mutations/UpdateEmployeeMutation';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';

import type { EmployeeRowFragment_employee } from './__generated__/EmployeeRowFragment_employee.graphql.js';


type Props = {
  employee: EmployeeRowFragment_employee,
  relay: any,
  showHeader: boolean,
}

type State = {
  fullName: string,
  fullAddress: string,
  salary: number,
  hasFormChanged: boolean,
  isUpdatingEmployee: boolean,
  isInEditMode: boolean,
}

class EmployeeRowFragment extends React.Component<Props, State> {
  state = {
    fullName: this.props.employee.fullName,
    fullAddress: this.props.employee.fullAddress,
    salary: this.props.employee.salary,
    hasFormChanged: false,
    isUpdatingEmployee: false,
    isInEditMode: false,
  }

  editButtonTitle = (hasFormChanged: boolean) => hasFormChanged ? "Save" : "Done"

  handleSubmit = () => {
    if (!this.state.hasFormChanged) {
      this.setState({ isInEditMode: false });
      return;
    }
    console.log("Submitting employee info ...")
    this.setState({ isUpdatingEmployee: true }, () => {
      UpdateEmployeeMutation(
        this.props.relay.environment,
        this.props.employee.id,
        this.state.fullName,
        this.state.fullAddress,
        this.state.salary,
        (employee) => {
          console.log("Employee fragment:")
          console.log(employee)
          this.setState(
            { isUpdatingEmployee: false, isInEditMode: false },
            () => {
              console.log("All done!");
            }
          )
        }
      )
    })
  }

  renderStaticRow = (employee: Object) => (
    <tr>
      <td>{employee.department.name}</td>
      <td>{employee.fullName}</td>
      <td>{employee.fullAddress}</td>
      <td>{employee.salary}</td>
      <td>
        <Button
          onClick={() => {
            this.setState({ isInEditMode: !this.state.isInEditMode, hasFormChanged: false })
          }}
        >
          Edit
        </Button>
      </td>
    </tr>
  )

  renderEditRow = (employee: Object) => (
    <tr>
      <td>{employee.department.name}</td>
      <td>
        <InputGroup
          value={this.state.fullName}
          disabled={this.state.isUpdatingEmployee}
          id="text-input"
          placeholder="Full name"
          onChange={event => {
            this.setState({ fullName: event.target.value, hasFormChanged: true })
          }}
        />
      </td>
      <td>
        <InputGroup
          value={this.state.fullAddress}
          disabled={this.state.isUpdatingEmployee}
          id="text-input"
          placeholder="Full address"
          onChange={event => {
            this.setState({ fullAddress: event.target.value, hasFormChanged: true })
          }}
        />
      </td>
      <td>
        <InputGroup
          disabled={this.state.isUpdatingEmployee}
          value={this.state.salary}
          id="text-input"
          placeholder="Salary"
          type="number"
          onChange={event => {
            this.setState({ salary: event.target.value, hasFormChanged: true })
          }}
        />
      </td>
      <td>
        <Button onClick={this.handleSubmit}>{this.editButtonTitle(this.state.hasFormChanged)}</Button>
      </td>
    </tr>
  )

  render = () =>
    this.state.isInEditMode ? this.renderEditRow(this.props.employee) : this.renderStaticRow(this.props.employee);
}

export default createFragmentContainer(EmployeeRowFragment, graphql`
  fragment EmployeeRowFragment_employee on Employee {
    id
    fullName
    fullAddress
    salary
    isAdmin
    company {
      name
    }
    department {
      name
    }
  }
`);
