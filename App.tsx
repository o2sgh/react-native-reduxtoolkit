import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
//@ts-ignore
import {Provider} from 'react-redux';
import  {store}  from './src/redux/Store';

const App = () => {
  return (
  <Provider store={store} >
      <RootNavigation/>
      </Provider>
    
  );
};
export default App;
