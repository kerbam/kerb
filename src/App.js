import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      </div>
      <script>
          (function(apiKey){
            (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
              v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
              o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
              y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
              z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
            // Call this whenever information about your visitors becomes available
            // Please use Strings, Numbers, or Bools for value types.
            pendo.initialize({
              visitor: {
                id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in
                // email:        // Optional
                // role:         // Optional
                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
              },
              account: {
                // id:           'ACCOUNT-UNIQUE-ID' // Highly recommended
                // name:         // Optional
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional
                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
              }
            });
          })('f72d5f01-b371-4cad-7f04-df672c356b81');
     </script>
    );
  }
}

export default App;
