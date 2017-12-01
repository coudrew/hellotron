import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/index.js';

const react_root = document.getElementById('react-root');

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Main />
    );
  }
}

ReactDOM.render(<App/>, react_root);