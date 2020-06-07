import React from 'react';

const Results = (props) => {
  return (
    <ul>
      {props.results.map((res) => (
        <li key={res.id} onClick={() => props.removed(res.id)}>
          {res.value}
        </li>
      ))}
    </ul>
  );
};

export default Results;
