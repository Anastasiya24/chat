import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import AccountContainer from 'components/AccountContainer';
import Message from 'components/shared/Message';
import Textarea from 'components/shared/Textarea';
import { sendSvg } from 'assets/icons';
import { getUserId } from 'services/getUserId';
import { loadMessagesList, addNewMessage } from 'store/reducers/messages/service';

const Wrapper = styled.div`
  margin: 20px;
  @media (max-width: 600px) {
    margin: 15px;
  }
`;

const MessagesList = styled.div`
  min-height: calc(100vh - 248px);
`;

const Footer = styled.div`
  display: flex;
`;

const SendImg = styled.img`
  margin-left: 10px;
  width: 30px;
  filter: invert(30%) sepia(14%) saturate(1269%) hue-rotate(275deg) brightness(91%);
  contrast(89%);
  cursor: pointer;
  @media (max-width: 600px) {
    margin-left: 6px;
    width: 24px;
  }
`;

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
        message: {
          senderId: id,
          text: newMessageTest,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      })
    );
    setMessageText('');
  };

  return (
    <AccountContainer name={name}>
      <Wrapper>
        <MessagesList>
          {messages.map(({ _id, text, time }) => (
            <Message key={_id} sender={name} time={time} text={text} />
          ))}
        </MessagesList>

        <Footer>
          <Textarea
            value={newMessageTest}
            onChange={setMessageText}
            placeholder="Your message"
            handleEnterKey={onSendMessage}
          />
          {newMessageTest && newMessageTest?.trim() && (
            <SendImg src={sendSvg} onClick={onSendMessage} />
          )}
        </Footer>
      </Wrapper>
    </AccountContainer>
  );
};

export default ChatPage;
