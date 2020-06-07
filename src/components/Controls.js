import React from 'react';

const Controls = (props) => {
  return (
    <>
      <button onClick={props.onIncrementCounter}>increment</button>
      <button onClick={props.onDecrementCounter}>decrement</button>
    </>
  );
};

export default Controls;
