import React from 'react';
import Button from 'components/shared/Button';
import AccountContainer from 'components/AccountContainer';
import history from 'store/history';
import styles from './style.module.css';

const MenuSection = () => {
  // TODO: GET NAME
  const name = 'Nastya';
  return (
    <AccountContainer name={name}>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h1 className={styles.title}>Choose a chat</h1>
          <Button
            text="With myself"
            onClick={() => history.push('/chat-with-me')}
            className={styles.button}
          />
          <Button
            text="With companion"
            onClick={() => history.push('/chat-with-companion')}
          />
        </div>
      </div>
    </AccountContainer>
  );
};

export default MenuSection;
