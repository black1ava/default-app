import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import normalize from 'react-native-normalize';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './styles';

const propTypes = {
  first: PropTypes.bool,
  last: PropTypes.bool,
  icon: PropTypes.element,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

function DrawerItem({first, last, icon, title, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: first ? normalize(20, 'height') : 0,
        marginBottom: last ? normalize(20, 'height') : 0,
        ...styles.container,
      }}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <Entypo name="chevron-small-right" size={normalize(24)} />
    </TouchableOpacity>
  );
}

DrawerItem.propTypes = propTypes;

export default React.memo(DrawerItem);
