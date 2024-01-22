import React from 'react';
import {View, Text} from 'react-native';

import {useUser} from '../../Hooks';

function Profile() {
  const user = useUser();

  console.log('user', user);

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

export default React.memo(Profile);
