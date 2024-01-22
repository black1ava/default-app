import React, {useCallback} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigation from '../StackNavigation';
import {Screen} from '../../Constant';
import {DrawerContent} from '../../Component';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  const renderDrawerContent = useCallback(function () {
    return <DrawerContent />;
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={renderDrawerContent}>
      <Drawer.Screen name={Screen.APP} component={StackNavigation} />
    </Drawer.Navigator>
  );
}

export default React.memo(DrawerNavigation);
