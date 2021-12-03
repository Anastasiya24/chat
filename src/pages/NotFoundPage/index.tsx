import history from 'store/history';
import styles from './style.module.css';

const NotFoundPage = () => (
  <div className={styles.container}>
    <h1>Page not found</h1>
    <div className={styles.button} onClick={() => history.push('/')}>
      <p>Go back</p>
    </div>
  </div>
);

export default NotFoundPage;
