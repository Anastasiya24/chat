import React from 'react';
import GreetingSection from 'components/GreetingSection';
import MenuSection from 'components/MenuSection';

const HomePage = () => {
  // TODO get Name from storage
  const name = 'Nastya';

  return <div>{name ? <MenuSection /> : <GreetingSection />}</div>;
};

export default HomePage;
