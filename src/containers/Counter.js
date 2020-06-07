import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../components/Controls';
import History from '../components/History';

import {
  INCREMENT,
  DECREMENT,
  ADD_HISTORY,
  REMOVE_HISTORY,
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
        <button onClick={() => this.props.addHistory(this.props.counter)}>
          Add
        </button>
        <History
          history={this.props.history}
          removed={this.props.removeHistory}
        ></History>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    history: state.history.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    addHistory: (value) => dispatch({ type: ADD_HISTORY, payload: { value } }),
    removeHistory: (id) => dispatch({ type: REMOVE_HISTORY, payload: { id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
