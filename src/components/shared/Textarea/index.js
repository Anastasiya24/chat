import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.textarea}
      placeholder={placeholder}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
};

export default Textarea;
