import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';
import StackNavigation from './StackNavigation';
import {useUser} from '../Hooks';

function Navigation() {
  const user = useUser();

  const navigation = useMemo(
    function () {
      return user ? <StackNavigation /> : <AuthNavigation />;
    },
    [user],
  );

  return <NavigationContainer>{navigation}</NavigationContainer>;
}

export default React.memo(Navigation);
