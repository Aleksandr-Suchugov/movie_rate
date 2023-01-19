import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star.js';

export default function Stars(props) {
  const { count } = props;
  if (!(Number(count) >= 1 && Number(count) <= 5)) {
    return null;
  }

  const movieRate = [];
  for (let i = 0; i < count; i += 1) {
    movieRate.push(1);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {movieRate.map((itemStar, idx) => <li key={idx}><Star /></li>)}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};
