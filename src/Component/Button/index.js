import React, {useMemo} from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {Color} from '../../Constant';

const propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
  loading: PropTypes.bool,
  titleStyle: PropTypes.object,
};

function Button({title, onPress, style, loading, titleStyle}) {
  const content = useMemo(
    function () {
      return loading ? (
        <ActivityIndicator color={Color.LIGHT} size="small" />
      ) : (
        <Text style={{...styles.title, ...titleStyle}}>{title}</Text>
      );
    },
    [loading, title, titleStyle],
  );

  return (
    <TouchableOpacity
      disabled={loading}
      style={{...styles.container, ...style}}
      onPress={onPress}>
      {content}
    </TouchableOpacity>
  );
}

Button.propTypes = propTypes;

export default React.memo(Button);
