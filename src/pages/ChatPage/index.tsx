import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AccountContainer from 'components/AccountContainer';
import Message from 'components/shared/Message';
import Textarea from 'components/shared/Textarea';
import { sendSvg } from 'assets/icons';
import { getUserId } from 'services/getUserId';
import { loadMessagesList, addNewMessage } from 'store/reducers/messages/service';
import { MessagesStoreType, MessageType, RequestMessageOptions } from 'types/messages';
import { UserStateType } from 'types/user';
import styles from './style.module.css';

const ChatPage = () => {
  const id = getUserId();
  const name = useSelector(({ user }: UserStateType) => user.name);
  const messages = useSelector(({ messages }: MessagesStoreType) => messages.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessagesList(id));
  }, []);

  const [newMessageTest, setMessageText] = useState<string>('');

  const onSendMessage = () => {
    const options: RequestMessageOptions = {
      message: {
        senderId: id,
        text: newMessageTest,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      },
    };
    dispatch(addNewMessage(options));
    setMessageText('');
  };

  return (
    <AccountContainer name={name}>
      <div className={styles.chatContainer}>
        <div className={styles.messages}>
          {messages.map(({ _id, text, time }: MessageType) => (
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
