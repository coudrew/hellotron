import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { remote } from 'electron';
import Main from './components/main/index.js';
import '../scss/index.scss';

const react_root = document.getElementById('reactRoot');
const win = remote.getCurrentWindow();

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { props } = this;
    console.log(props);
    return (
      <Main { ...props } />
    );
  }
}

const prctToPx = (dim, prct) => dim === 'height'
  ? win.getContentSize()[1] * (prct / 100)
  : win.getContentSize()[0] * (prct / 100);

console.log(react_root.clientHeight, react_root.clientWidth);

const boxprops = {
  // label: 'Box',
  height: prctToPx('height', 100),
  width: prctToPx('width', 50),
  margin: 0,
  padding: 0
}


ReactDOM.render(<App { ...boxprops }/>, react_root);