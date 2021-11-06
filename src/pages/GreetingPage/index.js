import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editUser } from 'store/reducers/user/service';
import history from 'store/history';
import { getUserId } from 'services/getUserId';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  @media (max-width: 600px) {
    margin: 40px 20px;
  }
`;

const Title = styled.h1`
  text-shadow: 5px -2px 0px var(--secondary-color);
  font-family: 'NotoSansTC Bold';
  font-size: 65px;
  color: var(--primary-color);
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

const Subtitle = styled.p`
  padding: 10px 0;
  color: var(--primary-color);
  font-family: 'NotoSansTC Bold';
  font-size: 17px;
`;

const ChatButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

const GreetingSection = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onSaveUserName = () => {
    const id = getUserId();
    dispatch(editUser({ id, newName: name }));
    history.push('/');
  };

  return (
    <Wrapper>
      <div>
        <Title>Nice to meet you</Title>
        <Subtitle>What is your name?</Subtitle>
        <Input
          value={name}
          onChange={(e) => setName(e?.target?.value)}
          placeholder="Nickname"
          handleEnterKey={onSaveUserName}
        />
        <ChatButton text="Chat!" onClick={onSaveUserName} invalid={!name} />
      </div>
    </Wrapper>
  );
};

export default GreetingSection;
