import React from 'react';

import Root from './Root';
import { Notifications } from 'components/modules';


function App() {

  // const isAuthorized = true;

  return (
    <div className='app'>
      <Root />
      <Notifications />
    </div>
  );
}

export default App;
