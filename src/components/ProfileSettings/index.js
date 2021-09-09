import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';
import styles from './style.module.css';

const ProfileSettings = ({ onChangeUserName }) => {
  const name = useSelector(({ user }) => user.name);
  const [newName, setNewName] = useState('');

  return (
    <div className={styles.wrapper}>
      <h1>Your nickname: {name}</h1>
      <h1>Change your nickname</h1>
      <Input
        value={newName}
        onChange={(e) => setNewName(e?.target?.value)}
        placeholder="Nickname"
        handleEnterKey={() => onChangeUserName(newName)}
      />
      <Button
        text="Change"
        onClick={() => onChangeUserName(newName)}
        invalid={!newName}
        className={styles.button}
      />
    </div>
  );
};

ProfileSettings.propTypes = {
  onChangeUserName: PropTypes.func.isRequired,
};

export default ProfileSettings;
