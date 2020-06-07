import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: #333;
  border: 2px solid #333;
  padding: 0.5em 1em;
  cursor: pointer;
  margin-right: 0.5em;
`;

const Controls = (props) => {
  return (
    <>
      <Button onClick={props.onIncrementCounter}>increment</Button>
      <Button onClick={props.onDecrementCounter}>decrement</Button>
    </>
  );
};

export default Controls;
