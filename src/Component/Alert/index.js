import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import normalize from 'react-native-normalize';
import PropTypes from 'prop-types';

import AutoheightFastImage from '../AutoHeightFastImage';
import Button from '../Button';
import {styles} from './styles';
import {useLanguage} from '../../Hooks';
import {translation} from '../../Translation';

const propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

function Alert({title, onClose}) {
  const language = useLanguage();
  translation.setLanguage(language);

  const renderTitle = useMemo(
    function () {
      return title && <Text style={styles.title}>{title}</Text>;
    },
    [title],
  );

  return (
    <View style={styles.container}>
      <AutoheightFastImage
        source={require('../../assets/alert.png')}
        width={normalize(48)}
      />
      {renderTitle}
      <Button
        style={styles.button}
        title={translation.Okay}
        onPress={onClose}
      />
    </View>
  );
}

Alert.propTypes = propTypes;

export default React.memo(Alert);
