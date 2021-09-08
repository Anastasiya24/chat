import React from 'react';
import history from 'store/history';
import styles from './styles.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <p>Page not found</p>
      <div className={styles.button} onClick={() => history.push('/')}>
        <p>Go back</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
