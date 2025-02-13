import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/redux/store/configureStore';
import 'react-native-gesture-handler';
import NavStart from './app/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavStart />
    </Provider>
  );
};

export default App;
