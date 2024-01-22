import React, {useMemo} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {Color} from '../../Constant';

const propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.element,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
};

function SocialMediaLogin({title, style, icon, loading, onPress}) {
  const content = useMemo(
    function () {
      return loading ? (
        <ActivityIndicator color={Color.LIGHT} size="small" />
      ) : (
        <View style={styles.contentContainer}>
          <View style={styles.icon}>{icon}</View>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    },
    [loading, icon, title],
  );

  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      disabled={loading}
      onPress={onPress}>
      {content}
    </TouchableOpacity>
  );
}

SocialMediaLogin.propTypes = propTypes;

export default React.memo(SocialMediaLogin);
