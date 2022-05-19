import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Message = ({ sender, text, time }) => {
  return (
    <div className={styles.message}>
      <p className={styles.sender}>
        <span data-test="sender_name">{sender}</span>:
      </p>
      <div className={styles.textSection}>
        <p className={styles.text} data-test="message_text">
          {text}
        </p>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  sender: PropTypes.string,
  text: PropTypes.string,
  time: PropTypes.string,
};

Message.defaultProps = {
  sender: 'User',
  text: '',
  time: '',
};

export default Message;
