import React from 'react';
import Button from 'components/shared/Button';
import AccountContainer from 'components/AccountContainer';
import styles from './style.module.css';

const MenuSection = () => {
  // TODO: GET NAME
  const name = 'Nastya';
  return (
    <AccountContainer name={name}>
      <div>
        <h1>Choose a chat</h1>
        <Button text="With myself" onClick={() => {}} />
        <Button text="With companion" onClick={() => {}} />
      </div>
    </AccountContainer>
  );
};

export default MenuSection;
