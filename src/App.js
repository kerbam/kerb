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
                <font color="red">*</font>
                <label for="customerId">
                    Customer
                </label>
                <select id="customerId" name="customerId" class="search-input" onchange="jspChangeCurrentCustomer()"
                    ng-non-bindable="true">
                    <option value="">Choose...</option>
                    <option ng-non-bindable="true" value="ALL_CUSTOMERS">All</option>
                    <option ng-non-bindable="true" value="6398">IOSApp</option>
                    <option ng-non-bindable="true" value="7718">Pendo Test</option>
                    <option ng-non-bindable="true" value="2051">TestCustomer</option>
                </select>
                <font color="red">*</font>
                <label for="sourceLanguage">
                    Source language
                </label>
                <select name="sourceLanguage" id="sourceLanguage" class="search-input search-input-id"
                    onchange="jspSrcLanguageChanged(event);" disabled="">
                    <option value="All">Choose...</option>
                </select>
                <font color="red">*</font>
                <label for="targetLanguage">
                    Target language
                </label>
                <span id="targetLanguages" class="edit icon disabled">✎</span>
                <select name="targetLanguage" id="targetLanguage" class="search-input search-input-id"
                    onchange="jspTgtLanguageChanged(event);" disabled="">
                    <option value="">Choose...</option>
                </select>
                <label for="projectName">
                    Project
                </label>
                <select name="projectName" id="projectName" class="search-input" onchange="jspProjectNameChanged(event);" disabled="">
                    <option value="All" selected="selected">All</option>
                </select>
            </div>
        );
    }
}

export default App;
