import { ReactNode, useEffect } from 'react';
import styles from './style.module.css';

type Props = {
  onClose: Function;
  title: string;
  children: ReactNode;
};

const Modal: React.FC<Props> = ({ onClose, title, children }) => {
  const onKeydown = (event: KeyboardEvent) => {
    if (event?.key === 'Escape') onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  return (
    <div className={styles.modal} onClick={(e) => onClose(e)}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.close} onClick={(e) => onClose(e)}>
            &times;
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
