import React from 'react';
import styled from 'styled-components';
import history from 'store/history';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.h1`
  text-shadow: 5px -2px 0px var(--extra-dark-color);
  font-family: 'NotoSansTC Bold';
  font-size: 65px;
  color: var(--dark-color);
  margin-bottom: 20px;
`;

const Button = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
  border: 2px solid var(--extra-dark-color);
  border-radius: 7px;
  cursor: pointer;

  font-family: 'NotoSansTC Bold';
  font-size: 17px;

  &:hover {
    background-color: var(--dark-color);
    color: var(--white-color);
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Header>Page not found</Header>
      <Button onClick={() => history.push('/')}>
        <p>Go back</p>
      </Button>
    </Container>
  );
};

export default NotFoundPage;
