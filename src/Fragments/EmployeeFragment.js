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

import { AppToaster } from "./../Toaster";

import type { EmployeeFragment_employee } from './__generated__/EmployeeFragment_employee.graphql.js';


type Props = {
  employee: EmployeeFragment_employee,
  relay: any,
  showHeader: boolean,
}

type State = {
  fullName: string,
  fullAddress: string,
  salary: number,
  hasFormChanged: boolean,
  isUpdatingEmployee: boolean,
}

class EmployeeFragment extends React.Component<Props, State> {
  state = {
    fullName: this.props.employee.fullName,
    fullAddress: this.props.employee.fullAddress,
    salary: this.props.employee.salary,
    hasFormChanged: false,
    isUpdatingEmployee: false,
  }


  static getDerivedStateFromProps = (props: Props, state: State) => {
    if (state.hasFormChanged) {
      return null;
    }
    const { fullAddress, fullName, salary } = props.employee;
    return Object.assign({}, state, { fullAddress, fullName, salary })
  }

  handleSubmit = () => {
    console.log("Submitting employee info ...")
    this.setState({ isUpdatingEmployee: true }, () => {
      UpdateEmployeeMutation(
        this.props.relay.environment,
        this.props.employee.id,
        this.state.fullName,
        this.state.fullAddress,
        this.state.salary,
        (isSuccess) => {
          this.setState(
            { isUpdatingEmployee: false, hasFormChanged: false },
            () => {
              console.log("All done!");
              AppToaster.show({ message: "Employee saved.", timeout: 1500 });
            }
          )
        }
      )
    })
  }


  render = () => (
    <Card interactive={true} elevation={Elevation.ONE}>
      {this.props.showHeader &&
        <div>
          <h2>Your employee record</h2>
          <label>Company</label> <h4>{ this.props.employee.company.name }</h4>
          <label>Department</label> <h4>{ this.props.employee.department.name }</h4>
        </div>
      }
      <FormGroup label="Full name" labelFor="text-input">
        <InputGroup
          value={this.state.fullName}
          disabled={this.state.isUpdatingEmployee}
          id="text-input"
          placeholder="Full name"
          onChange={event => {
            this.setState({ fullName: event.target.value, hasFormChanged: true })
          }}
        />
      </FormGroup>
      <FormGroup label="Full address" labelFor="text-input">
        <InputGroup
          value={this.state.fullAddress}
          disabled={this.state.isUpdatingEmployee}
          id="text-input"
          placeholder="Full address"
          onChange={event => {
            this.setState({ fullAddress: event.target.value, hasFormChanged: true })
          }}
        />
      </FormGroup>
      <FormGroup label="Salary (in millions)" labelFor="text-input">
        <InputGroup
          disabled={!this.props.employee.isAdmin}
          value={this.state.salary}
          id="text-input"
          placeholder="Salary"
          type="number"
          onChange={event => {
            this.setState({ salary: event.target.value, hasFormChanged: true })
          }}
        />
      </FormGroup>
      <Button onClick={this.handleSubmit} disabled={!this.state.hasFormChanged}>Save</Button>
    </Card>
  )
}

export default createFragmentContainer(EmployeeFragment, graphql`
  fragment EmployeeFragment_employee on Employee {
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
