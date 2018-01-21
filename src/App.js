import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import StandardFeature from './app/standard-feature/containers/StandardFeature';
import ReusableFeature1 from './app/reusable-feature-instance-1/container/ReusableFeature1';
import ReusableFeature2 from './app/reusable-feature-instance-2/container/ReusableFeature2';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <table>
          <tr>
            <td>
              <StandardFeature />
            </td>
            <td>
              <ReusableFeature1 />
            </td>
            <td>
              <ReusableFeature2 />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
