import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';

function Drawer() {
  const navigation = useNavigation();

  const handlePress = useCallback(
    function () {
      navigation.openDrawer();
    },
    [navigation],
  );

  return (
    <TouchableOpacity onPress={handlePress}>
      <Feather name="menu" size={normalize(28)} />
    </TouchableOpacity>
  );
}

export default React.memo(Drawer);
