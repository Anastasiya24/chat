import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './style.module.css';

const ChatContainer = () => {
  const [isOpenAccountModal, setAccountModal] = useState(false);
  // TODO get Name from storage
  const name = 'Nastya';

  return (
    <div>
      <div>Header</div>
      <div onClick={() => setAccountModal(!isOpenAccountModal)}>{name}</div>
      <div>SideBar</div>
    </div>
  );
};

ChatContainer.propTypes = {
  // title: PropTypes.string.isRequired,
};

export default ChatContainer;
