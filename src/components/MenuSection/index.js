import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'components/shared/Button';
import AccountContainer from 'components/AccountContainer';
import history from 'store/history';
import styles from './style.module.css';

const MenuSection = () => {
  const name = useSelector(({ user }) => user.name);
  return (
    <AccountContainer name={name}>
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.title}>Let's start!</h1>
          <Button text="Chat" onClick={() => history.push('/chat')} />
        </div>
      </div>
    </AccountContainer>
  );
};

export default MenuSection;
