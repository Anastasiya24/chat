import React from 'react';
import AccountContainer from 'components/AccountContainer';
import Message from 'components/shared/Message';
import styles from './style.module.css';

const messageList = [
  {
    id: 1,
    sender: { id: 1, name: 'Nastya' },
    receiver: { id: 1, name: 'Nastya' },
    text: 'Hi!',
    date: '14:16 08-09-2021',
  },
  {
    id: 2,
    sender: { id: 1, name: 'Nastya' },
    receiver: { id: 1, name: 'Nastya' },
    text: 'Hello!',
    date: '14:18 08-09-2021',
  },
];

const ChatWithMePage = () => {
  // TODO get Name from storage
  const name = 'Nastya';

  return (
    <AccountContainer name={name}>
      <>
        {messageList.map(({ id, sender, text }) => (
          <Message key={id} sender={sender?.name} text={text} />
        ))}
      </>
    </AccountContainer>
  );
};

export default ChatWithMePage;
