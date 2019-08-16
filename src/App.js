import React from 'react';

import './App.css';
import {connect} from "react-redux";
import {increment, decrement} from "./actions/actions"

function App(props) {
  console.log(props);
  return (
    <div className="App">
      Clicked: {props.count}
      <button onClick={props.increment}>Increase</button>
      <button onClick={()=>props.decrement()}>decrease</button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    count: state.count
  }
};

export default connect(mapStateToProps, {increment, decrement})(App);
