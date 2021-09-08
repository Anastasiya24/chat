import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './style.module.css';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';

const GreetingSection = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <div className={styles.header}>Nice to meet you</div>
      <p>How are you?</p>
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
      />
    </div>
  );
};

GreetingSection.propTypes = {
  // title: PropTypes.string.isRequired,
};

export default GreetingSection;
