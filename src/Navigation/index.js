import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';
import {useUser} from '../Hooks';

function Navigation() {
  const user = useUser();

  const navigation = useMemo(
    function () {
      return user ? <DrawerNavigation /> : <AuthNavigation />;
    },
    [user],
  );

  return <NavigationContainer>{navigation}</NavigationContainer>;
}

export default React.memo(Navigation);
