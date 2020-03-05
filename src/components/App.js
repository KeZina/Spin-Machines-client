import React from 'react';
import Slot from './Slot';
import { SpinContext } from '../utils/context';
import useSocket from '../hooks/useSocket';

const App = () => {
  const spin = useSocket();

  return (
    <SpinContext.Provider value = {spin}>
      <Slot />
    </SpinContext.Provider>
  )
}

export default App;
