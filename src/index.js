import React from 'react';

import Navigation from './Navigation';
import {useLanguage} from './Hooks';
import {translation} from './Translation';

function AppContainer() {
  const language = useLanguage();
  translation.setLanguage(language);

  return <Navigation />;
}

export default React.memo(AppContainer);
