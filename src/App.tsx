// import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  // const sortByAlpha = () => {
  //   return goodsFromServer.sort((a, b) => a.localeCompare(b));
  // };

  // const sortByLength = () => {
  //   return goodsFromServer.sort((a, b) => a.length - b.length);
  // };

  // const sortByLength = () => {
  //   return goodsFromServer.sort((a, b) => a.length - b.length);
  // };

  // const sortByLength = () => {
  //   return goodsFromServer.sort((a, b) => a.length - b.length);
  // };

  // const [value, setValue] = useState();

  return (
    <div className="section content">
      <div className="buttons">
        <button type="button" className="button is-info is-light">
          Sort alphabetically
        </button>

        <button type="button" className="button is-success is-light">
          Sort by length
        </button>

        <button type="button" className="button is-warning is-light">
          Reverse
        </button>

        <button type="button" className="button is-danger is-light">
          Reset
        </button>
      </div>

      <ul>
        {/* <ul>
          {}
        </ul> */}
      </ul>
    </div>
  );
};
