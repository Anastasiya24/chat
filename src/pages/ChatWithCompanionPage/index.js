import React from 'react';
import AccountContainer from 'components/AccountContainer';
import styles from './style.module.css';

const ChatWithCompanionPage = () => {
  // TODO get Name from storage
  const name = 'Nastya';

  return <AccountContainer name={name}>Companion</AccountContainer>;
};

export default ChatWithCompanionPage;
