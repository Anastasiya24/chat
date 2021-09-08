import React from 'react';
import GreetingSection from 'components/GreetingSection';
import MenuSection from 'components/MenuSection';

const HomePage = () => {
  // TODO get Name from storage
  const name = 'Nastya';

  return name ? <MenuSection /> : <GreetingSection />;
};

export default HomePage;
