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
  onPress: PropTypes.func,
  cancelTitle: PropTypes.string,
  actionTitle: PropTypes.string,
  loading: PropTypes.bool,
};

function Information({
  title,
  onClose,
  onPress,
  cancelTitle,
  actionTitle,
  loading,
}) {
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
        source={require('../../assets/information.png')}
        width={normalize(48)}
      />
      {renderTitle}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonCancel}
          title={cancelTitle}
          onPress={onClose}
          titleStyle={styles.cancel}
        />
        <Button
          style={styles.button}
          title={actionTitle}
          onPress={onPress}
          loading={loading}
        />
      </View>
    </View>
  );
}

Information.propTypes = propTypes;

export default React.memo(Information);
