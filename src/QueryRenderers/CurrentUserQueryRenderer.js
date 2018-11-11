// @flow

import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Spinner, Tabs, Tab, } from "@blueprintjs/core";

import React from 'react';
import type { ReadyState } from 'react-relay';

import EmployeeFragment from '../Fragments/EmployeeFragment';
import CompanyFragment from '../Fragments/CompanyFragment';
import environment from '../Environment';
import Emitter from '../Emitter'

type Props = {
}

type State = {
  refetchCounter: number,
  tab: string,
}

export default class CurrentUserQueryRenderer extends React.Component<Props, State> {
  state = {
    refetchCounter: 0,
    tab: "employee",
  }

  componentDidMount = async () => {
    console.log('App component did mount!');
    this.token = Emitter.addListener('updateEnv', () => this.refetch());
  }

  componentWillUnmount = () => {
    if (this.token) { this.token.remove(); }
  }

  componentWillUnmount = () => {
    if (this.token) { this.token.remove(); }
  }

  token: any

  refetch = () => this.setState(prevState => ({ refetchCounter: prevState.refetchCounter + 1 }));

  renderQuery = () => (
    <QueryRenderer
      environment={environment}
      variables={{ refetchCounter: this.state.refetchCounter }}
      render={(readyState: ReadyState) => {
        const { error, props } = readyState;
        console.log('---- User container query render ----');
        console.log(error);
        console.log(props);
        console.log('---- ----');

        if (error) {
          return (<p>Oh no an error happened!</p>)
        }

        if (!props) {
          return <Spinner />
        }

        if (props.currentUser == null) {
          return this.renderNone();
        }

        let tab = this.state.tab;
        if (this.state.tab === "company" && !props.currentUser.company) {
          tab = "employee";
        }

        return (
          <Tabs id="TabsExample" onChange={tab => this.setState({ tab })} selectedTabId={tab}>
            <Tab
              id="employee"
              title="Current Employee"
              panel={<EmployeeFragment showHeader={true} employee={props.currentUser.employee} />}
            />
            { props.currentUser.company &&
              (
                <Tab
                  id="company"
                  title="Top Earners"
                  panel={<CompanyFragment company={props.currentUser.company} />}
                />
              )
            }
          </Tabs>
        )

      }}
      query={graphql`
        query CurrentUserQueryRendererQuery {
          currentUser {
            id
            email
            employee {
              ...EmployeeFragment_employee
            }
            company {
              ...CompanyFragment_company
            }
          }
        }`
      }
    />
  )

  renderNone = () => (
    <div className="bp3-callout .modifier">
    <h4 className="bp3-heading">Hello!</h4>
      Please select a user!
    </div>
  )

  render = () => this.renderQuery();
}
