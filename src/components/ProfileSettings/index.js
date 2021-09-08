import React, { useState } from 'react';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';
import styles from './style.module.css';

const ProfileSettings = () => {
  const [newName, setNewName] = useState('');
  return (
    <div className={styles.wrapper}>
      <h1>Change your nickname</h1>
      <Input
        value={newName}
        onChange={(e) => setNewName(e?.target?.value)}
        placeholder="First Name"
      />
      <Button
        text="Change"
        onClick={() => {
          //  TODO: SAVE NEW NAME
        }}
        invalid={!newName}
        className={styles.button}
      />
    </div>
  );
};

export default ProfileSettings;
