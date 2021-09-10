import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AccountContainer from 'components/AccountContainer';
import Message from 'components/shared/Message';
import Textarea from 'components/shared/Textarea';
import { sendSvg } from 'assets/icons';
import { getUserId } from 'services/getUserId';
import { loadMessagesList, addNewMessage } from 'store/reducers/messages';
import styles from './style.module.css';

const ChatPage = () => {
  const id = getUserId();
  const name = useSelector(({ user }) => user.name);
  const messages = useSelector(({ messages }) => messages.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessagesList(id));
  }, []);

  const [newMessageTest, setMessageText] = useState('');

  const onSendMessage = () => {
    dispatch(
      addNewMessage({
        id,
        message: {
          id: uuidv4(),
          text: newMessageTest,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      })
    );
    setMessageText('');
  };

  return (
    <AccountContainer name={name}>
      <div className={styles.chatContainer}>
        <div className={styles.messages}>
          {messages.map(({ id, text, time }) => (
            <Message key={id} sender={name} time={time} text={text} />
          ))}
        </div>

        <div className={styles.footer}>
          <Textarea
            value={newMessageTest}
            onChange={setMessageText}
            placeholder="Your message"
            handleEnterKey={onSendMessage}
          />
          {newMessageTest && newMessageTest?.trim() && (
            <img src={sendSvg} className={styles.sendIcon} onClick={onSendMessage} />
          )}
        </div>
      </div>
    </AccountContainer>
  );
};

export default ChatPage;
