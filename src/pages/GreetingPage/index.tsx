import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from 'store/reducers/user/service';
import history from 'store/history';
import { getUserId } from 'services/getUserId';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import { EditUserOptions } from 'types/user';
import styles from './style.module.css';

const GreetingSection = () => {
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch();

  const onSaveUserName = () => {
    const id = getUserId();
    const options: EditUserOptions = { id, newName: name };
    dispatch(editUser(options));
    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Nice to meet you</h1>
        <p className={styles.subtitle}>What is your name?</p>
        <Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e?.target?.value)}
          placeholder="Nickname"
          handleEnterKey={onSaveUserName}
        />
        <Button
          text="Chat!"
          onClick={onSaveUserName}
          invalid={!name}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default GreetingSection;
