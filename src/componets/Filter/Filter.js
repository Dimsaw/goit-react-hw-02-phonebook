import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    <span className={s.text}>Find contacts by name</span>
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
