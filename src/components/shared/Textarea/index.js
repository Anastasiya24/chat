import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Textarea = ({ value, onChange, placeholder, handleEnterKey }) => {
  const onKeyPress = (event) => {
    if (event.key === 'Enter' && value?.trim()) {
      event.preventDefault();
      handleEnterKey();
    }
  };

  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.textarea}
      placeholder={placeholder}
      onKeyPress={(e) => handleEnterKey && onKeyPress(e)}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  handleEnterKey: PropTypes.func,
};

Textarea.defaultProps = {
  placeholder: '',
  handleEnterKey: null,
};

export default Textarea;
