import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.effect}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className={styles.border}>
        <i />
      </span>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
