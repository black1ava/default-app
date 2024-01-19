import React from 'react';
import {View, Text, TextInput} from 'react-native';
import normalize from 'react-native-normalize';
import ProTypes from 'prop-types';

import {styles} from './styles';
import AutoHeightFastImage from '../AutoHeightFastImage';

const propTypes = {
  placeholder: ProTypes.string,
  value: ProTypes.string,
  onChange: ProTypes.func,
};

function PhoneInput({placeholder, value, onChange}) {
  return (
    <View style={styles.container}>
      <View style={styles.phoneContainer}>
        <AutoHeightFastImage
          source={require('../../assets/khmer.png')}
          width={normalize(32)}
        />
        <View style={styles.column} />
        <Text style={styles.code}>+855</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          keyboardType="phone-pad"
        />
      </View>
    </View>
  );
}

PhoneInput.propTypes = propTypes;

export default React.memo(PhoneInput);
