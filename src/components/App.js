import React from 'react';
import GreetingSection from './GreetingSection';
import MenuSection from './MenuSection';

function App() {
  // TODO get Name from storage
  const name = 'Nastya';

  return <div>{name ? <MenuSection /> : <GreetingSection />}</div>;
}

export default App;
