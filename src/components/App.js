import React from 'react';
import Slot from './Slot';
import { QuestsContext } from '../utils/context';
import useSocket from '../hooks/useSocket';

const App = () => {
  const quests = useSocket();

  return (
    <QuestsContext.Provider value = {quests}>
      <Slot />
    </QuestsContext.Provider>
  )
}

export default App;
