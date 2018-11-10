// @flow

import React, { Component } from 'react';
import {
  Spinner,
  Navbar,
  Alignment ,
} from "@blueprintjs/core";

import CurrentUserQueryRenderer from './QueryRenderers/CurrentUserQueryRenderer';
import Emitter from './Emitter';

import './../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import './../node_modules/normalize.css/normalize.css';

import './App.css';

type State = {
  email: string,
}

class App extends React.Component<{}, State> {
  state = {
    email: '',
  }

	availableUsers = () => [
    "joe.maddon@cubs.com",
    "kyle.schwarber@cubs.com",
    "anythony.rizzo@cubs.com",
    "fred.hoidberg@bulls.com",
    "kris.dunn@bulls.com",
    "zach.dunn@bulls.com",
	]

  handleChange = (event: Object) => {
    localStorage.setItem('email', event.target.value);
    Emitter.emit('updateEnv');
    this.setState({ email: event.target.value })
  }

  email = () => localStorage.getItem("email") || '';

  renderSelect = () => (
    <div className="bp3-select">
      <select value={this.email()} onChange={this.handleChange}>
        <option value="">Choose user ...</option>
        {this.availableUsers().map(email => (
          <option value={email} key={email}>{email}</option>
        ))}
      </select>
    </div>
  )

  render = () => (
    <React.Fragment>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Patient - IQ</Navbar.Heading>
          {this.renderSelect()}
        </Navbar.Group>
      </Navbar>
      <CurrentUserQueryRenderer />
    </React.Fragment>
  );
}

export default App;
