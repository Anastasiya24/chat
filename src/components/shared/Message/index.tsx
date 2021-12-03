import styles from './style.module.css';

type Props = {
  sender: string;
  text: string;
  time: string;
};

const Message: React.FC<Props> = ({ sender = 'User', text = '', time = '' }) => (
  <div className={styles.message}>
    <p className={styles.sender}>{sender}:</p>
    <div className={styles.textSection}>
      <p className={styles.text}>{text}</p>
      <p className={styles.time}>{time}</p>
    </div>
  </div>
);

export default Message;
