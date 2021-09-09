import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Input = ({ value, onChange, placeholder, handleEnterKey }) => {
  const onKeyPress = (event) => {
    if (event.key === 'Enter' && value?.trim()) {
      event.preventDefault();
      handleEnterKey();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.effect}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={(e) => handleEnterKey && onKeyPress(e)}
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
  handleEnterKey: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  handleEnterKey: null,
};

export default Input;
