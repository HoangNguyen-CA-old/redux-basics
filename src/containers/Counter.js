import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../components/Controls';
import Results from '../components/Results';

import {
  INCREMENT,
  DECREMENT,
  ADD_RESULT,
  REMOVE_RESULT,
} from '../store/actionTypes';

class Counter extends Component {
  render() {
    return (
      <>
        <h1>{this.props.counter}</h1>
        <Controls
          onIncrementCounter={this.props.onIncrementCounter}
          onDecrementCounter={this.props.onDecrementCounter}
        ></Controls>
        <button onClick={() => this.props.addResult(this.props.counter)}>
          Add
        </button>
        <Results
          results={this.props.results}
          removed={this.props.removeResult}
        ></Results>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    results: state.results.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    addResult: (value) => dispatch({ type: ADD_RESULT, payload: { value } }),
    removeResult: (id) => dispatch({ type: REMOVE_RESULT, payload: { id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
