import React, { useState } from 'react';
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

// enum SortType {
//   NONE = 'none',
//   ALPHABET = 'alphabet',
//   LENGTH = 'length',
// }

export const App: React.FC = () => {
  const newGoods = [...goodsFromServer];
  const [value, setArray] = useState<string[]>(newGoods);

  const sortByAlpha = () => {
    setArray([...value].sort((a, b) => a.localeCompare(b)));
  };

  const sortByLength = () => {
    setArray([...value].sort((a, b) => a.length - b.length));
  };

  const reverse = () => {
    setArray([...value].reverse());
  };

  const reset = () => {
    setArray([...goodsFromServer]);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={sortByAlpha}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={reset}
        >
          Reset
        </button>
      </div>

      <ul>
        <ul>
          {value.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
