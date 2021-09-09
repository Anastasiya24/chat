import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.css';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import { editUser } from 'store/reducers/user';

const GreetingSection = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Nice to meet you</h1>
        <p className={styles.subtitle}>What is your name?</p>
        <Input
          value={name}
          onChange={(e) => setName(e?.target?.value)}
          placeholder="Nickname"
        />
        <Button
          text="Start"
          onClick={() => dispatch(editUser(name))}
          invalid={!name}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default GreetingSection;
