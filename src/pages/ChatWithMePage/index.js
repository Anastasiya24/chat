import React, { useState } from 'react';
import AccountContainer from 'components/AccountContainer';
import Message from 'components/shared/Message';
import Textarea from 'components/shared/Textarea';
import { sendSvg } from 'assets/icons';
import styles from './style.module.css';

const messageList = [
  {
    id: 1,
    sender: { id: 1, name: 'Nastya' },
    receiver: { id: 1, name: 'Nastya' },
    text: 'Hi!',
    date: '14:11',
  },
  {
    id: 2,
    sender: { id: 1, name: 'Nastya' },
    receiver: { id: 1, name: 'Nastya' },
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl
    d it to make a type specimen book. It has survived not only five centuries, but also the leap into 
    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
    Aldus PageMaker including versions of Lorem Ipsum`,
    time: '14:18',
  },
  {
    id: 3,
    sender: { id: 1, name: 'Nastya' },
    receiver: { id: 1, name: 'Nastya' },
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl
    d it to make a type specimen book. It has survived not only five centuries, but also the leap into 
    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
    Aldus PageMaker including versions of Lorem Ipsum`,
    time: '14:24',
  },
];

const ChatWithMePage = () => {
  // TODO get Name from storage
  const name = 'Nastya';
  const [newMessageTest, setMessageText] = useState('');

  return (
    <AccountContainer name={name}>
      <div className={styles.chatContainer}>
        <div className={styles.messages}>
          {messageList.map(({ id, sender, text, time }) => (
            <Message key={id} sender={sender?.name} time={time} text={text} />
          ))}
        </div>

        <div className={styles.footer}>
          <Textarea
            value={newMessageTest}
            onChange={setMessageText}
            placeholder="Your message"
          />
          {newMessageTest && (
            <img
              src={sendSvg}
              className={styles.sendIcon}
              onClick={() => {
                // TODO save new message
              }}
            />
          )}
        </div>
      </div>
    </AccountContainer>
  );
};

export default ChatWithMePage;
