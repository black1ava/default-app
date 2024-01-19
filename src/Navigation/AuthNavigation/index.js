import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../../Screen';
import {Screen} from '../../Constant';
import {styles} from './styles';
import {LanguageHeader} from '../../Component';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  const renderHeaderRight = useCallback(function () {
    return <LanguageHeader />;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: styles.container,
        headerTitleAlign: 'center',
        title: '',
        headerRight: renderHeaderRight,
      }}>
      <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default React.memo(AuthNavigation);
