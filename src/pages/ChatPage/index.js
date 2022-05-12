import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AccountContainer from 'components/AccountContainer';
import Message from 'components/shared/Message';
import Textarea from 'components/shared/Textarea';
import { sendSvg } from 'assets/icons';
import { getUserId } from 'services/getUserId';
import { loadMessagesList, addNewMessage } from 'store/reducers/messages/service';
import styles from './style.module.css';
import { getUserName } from 'store/reducers/user/selectors';
import { getMessagesList } from 'store/reducers/messages/selectors';

const ChatPage = () => {
  const id = getUserId();
  const name = useSelector(getUserName);
  const messages = useSelector(getMessagesList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessagesList(id));
  }, []);

  const [newMessageTest, setMessageText] = useState('');

  const onSendMessage = useCallback(() => {
    dispatch(
      addNewMessage({
        message: {
          senderId: id,
          text: newMessageTest,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      })
    );
    setMessageText('');
  }, []);

  return (
    <AccountContainer name={name}>
      <div className={styles.chatContainer} data-testid="chatContainer">
        <div className={styles.messages}>
          {messages.map(({ _id, text, time }) => (
            <Message key={_id} sender={name} time={time} text={text} />
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
