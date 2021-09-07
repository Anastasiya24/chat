import React from 'react';
import ChatContainer from './ChatContainer';
import GreetingSection from './GreetingSection';

function App() {
  // TODO get Name from storage
  const name = 'Nastya';

  return <div>{name ? <ChatContainer /> : <GreetingSection />}</div>;
}

export default App;
