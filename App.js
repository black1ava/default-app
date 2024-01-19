import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import AppContainer from './src';
import {store, persistedStore} from './src/Store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default React.memo(App);
