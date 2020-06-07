import React from 'react';
import Counter from './containers/Counter';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1.5em 2em;
`;

function App() {
  return (
    <Wrapper>
      <Counter></Counter>
    </Wrapper>
  );
}

export default App;
