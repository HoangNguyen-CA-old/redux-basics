import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../components/Controls';

class Counter extends Component {
  render() {
    return (
      <>
        <h1>{this.props.counter}</h1>
        <Controls
          onIncrementCounter={this.props.onIncrementCounter}
          onDecrementCounter={this.props.onDecrementCounter}
        ></Controls>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
