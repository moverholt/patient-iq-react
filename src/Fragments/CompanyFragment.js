// @flow

import { createFragmentContainer } from 'react-relay';
import {
  Button,
  FormGroup,
  InputGroup,
  Card,
  Elevation,
} from "@blueprintjs/core";
// import UpdateEmployeeMutation from '../Mutations/UpdateEmployeeMutation';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';

import EmployeeRowFragment from './EmployeeRowFragment';

import type { CompanyFragment_company } from './__generated__/CompanyFragment_company.graphql.js';


type Props = {
  company: CompanyFragment_company,
}

type State = {
}

class CompanyFragment extends React.Component<Props, State> {
  state = {
  }

  renderEmployeeTable = (employees: Array<Object>) => (
    <table className="bp3-html-table .modifier">
      <thead>
        <tr>
          <th>Department</th>
          <th>Full name</th>
          <th>Full address</th>
          <th>Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { employees.map(employee => (<EmployeeRowFragment key={employee.id} employee={employee} />)) }
      </tbody>
    </table>
  )

  render = () => (
    <React.Fragment>
      <h2>You're an admin for company: {this.props.company.name}</h2>
      { this.renderEmployeeTable(this.props.company.employees) }
    </React.Fragment>
  )
}

export default createFragmentContainer(CompanyFragment, graphql`
  fragment CompanyFragment_company on Company {
    id
    name
    employees {
      id
      ...EmployeeRowFragment_employee
    }
  }
`);
