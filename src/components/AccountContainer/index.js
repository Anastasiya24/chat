import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/shared/Modal';
import ProfileSettings from 'components/ProfileSettings';
import styles from './style.module.css';

const AccountContainer = ({ name, children }) => {
  const [isOpenAccountModal, setAccountModal] = useState(false);

  return (
    <>
      <div>
        <div className={styles.header}>
          <div className={styles.logo}>logo</div>
          <div
            className={styles.profileIcon}
            onClick={() => setAccountModal(!isOpenAccountModal)}
          >
            {name?.substring(0, 1)?.toUpperCase()}
          </div>
        </div>

        {children}

        <div className={styles.footer}>Footer</div>
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
