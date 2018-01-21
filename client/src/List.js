import React from 'react';
const List = ({ cities }) => (
  <a href="./">{cities.map((city, i) => <li key={i}>{city.name}</li>)}</a>
);

export default List;
