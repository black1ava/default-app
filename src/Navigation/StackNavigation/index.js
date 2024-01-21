import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screen} from '../../Constant';
import {HomeScreen} from '../../Screen';
import {styles} from './styles';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        contentStyle: styles.contentContainer,
      }}>
      <Stack.Screen name={Screen.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default React.memo(StackNavigation);
