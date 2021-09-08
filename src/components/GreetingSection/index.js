import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './style.module.css';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';

const GreetingSection = () => {
  const [name, setName] = useState('');

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Nice to meet you</h1>
        <p className={styles.subtitle}>What is your name?</p>
        <Input
          value={name}
          onChange={(e) => setName(e?.target?.value)}
          placeholder="First Name"
        />
        <Button
          text="Start"
          onClick={() => {
            // TODO save new name
          }}
          invalid={!name}
          className={styles.button}
        />
      </div>
    </div>
  );
};

GreetingSection.propTypes = {
  // title: PropTypes.string.isRequired,
};

export default GreetingSection;
