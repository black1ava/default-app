import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {HomeScreen} from '../../Screen';
import {Color, Screen} from '../../Constant';
import {styles} from './styles';
import {LanguageHeader} from '../../Component';
import {useLanguage} from '../../Hooks';
import {translation} from '../../Translation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const defaultOption = {
  contentStyle: styles.contentContainer,
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerRight: function () {
    return <LanguageHeader />;
  },
};

function HomeStack() {
  const language = useLanguage();

  translation.setLanguage(language);

  return (
    <Stack.Navigator screenOptions={defaultOption}>
      <Stack.Screen
        name={Screen.HOME_STACK}
        component={HomeScreen}
        options={{title: translation.Home}}
      />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  const language = useLanguage();
  translation.setLanguage(language);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: `${Color.DARK}30`,
        tabBarActiveTintColor: Color.DARK,
      }}>
      <Tab.Screen
        name={Screen.HOME_TAB}
        component={HomeStack}
        options={{
          tabBarLabel: translation.Home,
          tabBarIcon: function ({color, size}) {
            return <AntDesign name="home" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default React.memo(TabNavigation);
