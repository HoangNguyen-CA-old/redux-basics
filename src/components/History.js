import React from 'react';

const History = (props) => {
  return (
    <ul>
      {props.history.map((item) => (
        <li key={item.id} onClick={() => props.removed(item.id)}>
          {item.value}
        </li>
      ))}
    </ul>
  );
};

export default History;
