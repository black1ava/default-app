import React, {useCallback, useMemo} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import normalize from 'react-native-normalize';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {styles} from './styles';
import AutoHeightFastImage from '../AutoHeightFastImage';

const propTypes = {
  title: PropTypes.string,
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  code: PropTypes.string,
  activeCode: PropTypes.string,
  onPress: PropTypes.func,
};

function LanguageItem({title, source, code, activeCode, onPress}) {
  const active = useMemo(
    function () {
      return code === activeCode;
    },
    [code, activeCode],
  );

  const icon = useMemo(
    function () {
      return active ? 'radio-btn-active' : 'radio-btn-passive';
    },
    [active],
  );

  const handlePress = useCallback(
    function () {
      onPress(code);
    },
    [onPress, code],
  );

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <AutoHeightFastImage source={source} width={normalize(32)} />
      <Text style={styles.title}>{title}</Text>
      <Fontisto name={icon} size={normalize(18)} />
    </TouchableOpacity>
  );
}

LanguageItem.propTypes = propTypes;

export default React.memo(LanguageItem);
