import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img usemap="#logomap" src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <textarea style={{ width: "50%", height: "50%" }}>How can we improve?</textarea>
        <div className="form-group-xtm old-xtm-checkbox"><input type="checkbox" name="formProject.useLastValues"
          value="true" id="formProject.useLastValues" className="checkbox" onclick="this.blur();"
          onchange="jspChangeCreateProjectLastValues();"></input><label for="formProject.useLastValues"></label></div>
        <input type="hidden" id="__checkbox_formProject.useLastValues"
          name="__checkbox_formProject.useLastValues" value="true" autocomplete="off"></input>
      </div>
    );
  }
}

export default App;
