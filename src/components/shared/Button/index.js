import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Button = ({ invalid, text, onClick, className }) => {
  return (
    <div
      className={`${styles.wrapper} ${invalid && styles.invalid} ${className}`}
      onClick={() => {
        if (!invalid) onClick();
      }}
    >
      <p>{text}</p>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  invalid: false,
  className: '',
};

export default Button;
