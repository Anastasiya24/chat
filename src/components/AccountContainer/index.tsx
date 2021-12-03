import { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/shared/Modal';
import ProfileSettings from 'components/ProfileSettings';
import history from 'store/history';
import { editUser } from 'store/reducers/user/service';
import { getUserId } from 'services/getUserId';
import { chatSvg } from 'assets/icons';
import styles from './style.module.css';
import { EditUserOptions } from 'types/user';

type Props = {
  name: string;
  children: ReactNode;
};

const AccountContainer: React.FC<Props> = ({ name, children }) => {
  const [isOpenAccountModal, setAccountModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onChangeUserName = (newName: string): void => {
    const id = getUserId();
    const options: EditUserOptions = { id, newName };
    dispatch(editUser(options));
    setAccountModal(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo} onClick={() => history.push('/')}>
            <img src={chatSvg} alt="" />
          </div>
          <div
            className={styles.profileIcon}
            onClick={() => setAccountModal(!isOpenAccountModal)}
          >
            {name?.substring(0, 1)?.toUpperCase()}
          </div>
        </div>
        <div className={styles.content}>{children}</div>

        <div className={styles.footer}>
          <div className={styles.logo} onClick={() => history.push('/')}>
            <img src={chatSvg} alt="" />
          </div>
          <p>Chat app</p>
        </div>
      </div>
      {isOpenAccountModal && (
        <Modal onClose={() => setAccountModal(false)} title="Profile Settings">
          <ProfileSettings
            onChangeUserName={(newName: string) => onChangeUserName(newName)}
          />
        </Modal>
      )}
    </>
  );
};

export default AccountContainer;
