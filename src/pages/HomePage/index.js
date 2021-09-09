import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GreetingSection from 'components/GreetingSection';
import MenuSection from 'components/MenuSection';
import { loadUser } from 'store/reducers/user';

const HomePage = () => {
  const name = useSelector(({ user }) => user.name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return name ? <MenuSection /> : <GreetingSection />;
};

export default HomePage;
