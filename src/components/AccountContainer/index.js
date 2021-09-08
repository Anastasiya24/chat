import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/shared/Modal';
import ProfileSettings from 'components/ProfileSettings';
import history from 'store/history';
import { chatSvg } from 'assets/icons';
import styles from './style.module.css';

const AccountContainer = ({ name, children }) => {
  const [isOpenAccountModal, setAccountModal] = useState(false);

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
          <p>Chat enterprise</p>
        </div>
      </div>
      {isOpenAccountModal && (
        <Modal onClose={() => setAccountModal(false)} title="Profile Settings">
          <ProfileSettings />
        </Modal>
      )}
    </>
  );
};

AccountContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default AccountContainer;
