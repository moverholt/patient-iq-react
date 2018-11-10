// @flow

import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Spinner } from "@blueprintjs/core";

import React from 'react';
import type { ReadyState } from 'react-relay';

import EmployeeFragment from '../Fragments/EmployeeFragment';
import CompanyFragment from '../Fragments/CompanyFragment';
import environment from '../Environment';
import Emitter from '../Emitter'

type Props = {
	email: ?string,
}

type State = {
  refetchCounter: number,
}

export default class CurrentUserQueryRenderer extends React.Component<Props, State> {
	state = {
		refetchCounter: 0,
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

				return (
					<React.Fragment>
						{ props.currentUser.employee && <EmployeeFragment showHeader={true} employee={props.currentUser.employee} /> }
						{ props.currentUser.company && <CompanyFragment company={props.currentUser.company} /> }
					</React.Fragment>
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
