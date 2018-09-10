import React, { Component } from 'react';
import './App.css';

async function loadGreeting() {
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',},
    body: JSON.stringify({query: '{ greeting }'}),
     mode: "cors",
  });
  const responseBody = await response.json();
  return responseBody.data.greeting;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ''
    };
    loadGreeting().then((greeting) => this.setState({greeting}));
  }
  render() {
    const { greeting } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{greeting}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
