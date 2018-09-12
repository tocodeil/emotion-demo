import React from "react";
import ReactDOM from "react-dom";
import { css } from 'emotion';
import styled from 'react-emotion'

const Square = styled.div({
  display: 'inline-block',
  background: 'red',
  width: '100px',
  height: '100px', 
  margin: '10px',
  ':hover': {
    background: 'pink',
  }
});

const ColorSquare = styled.div(props => ({
  display: 'inline-block',
  background: props.color || 'red',
  width: '100px',
  height: '100px', 
  margin: '10px',
  ':hover': {
    background: 'pink',
  }
}));

class App extends React.Component {
  render() {
    return (
      <div>
        <ColorSquare />
        <Square />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
