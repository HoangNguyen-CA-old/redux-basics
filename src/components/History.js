import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0.2em 0.5em;
  border-radius: 3px;
  cursor: pointer;
  margin: 0.5em 0.3em;

  background-color: red;
  color: white;
  font-size: 1.2rem;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
`;

const History = (props) => {
  return (
    <>
      <Header>History:</Header>
      <ul>
        {props.history.map((item) => (
          <ListItem key={item.id} onClick={() => props.removed(item.id)}>
            {item.value}
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default History;
