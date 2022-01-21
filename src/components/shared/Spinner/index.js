import React from 'react';
import styles from './style.module.css';

const Spinner = () => {
  return (
    <div className={styles.ring}>
      Loading
      <span></span>
    </div>
  );
};

export default Spinner;
