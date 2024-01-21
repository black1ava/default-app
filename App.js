import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import AppContainer from './src';
import {store, persistedStore} from './src/Store';

function App() {
  useEffect(function () {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default React.memo(App);
