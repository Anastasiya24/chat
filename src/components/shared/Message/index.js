import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Message = ({ sender, text }) => {
  return (
    <div className={styles.message}>
      <p>{sender}: </p>
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  sender: PropTypes.string,
  text: PropTypes.string,
};

Message.defaultProps = {
  sender: 'User',
  text: '',
};

export default Message;
