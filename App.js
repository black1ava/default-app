import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import AppContainer from './src';
import {store, persistedStore} from './src/Store';
import {Color} from './src/Constant';

function App() {
  useEffect(function () {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <StatusBar backgroundColor={Color.LIGHT} barStyle="dark-content" />
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default React.memo(App);
