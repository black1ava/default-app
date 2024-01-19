import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {useLanguage} from '../../Hooks';
import {translation} from '../../Translaction';
import {PhoneInput} from '../../Component';

function Login() {
  const language = useLanguage();
  translation.setLanguage(language);

  const [phone, setPhone] = useState('');

  const handlePhoneChange = useCallback(function (value) {
    setPhone(value);
  }, []);

  return (
    <View style={styles.container}>
      <PhoneInput
        value={phone}
        onChange={handlePhoneChange}
        placeholder={translation['Please input your phone']}
      />
    </View>
  );
}

export default React.memo(Login);
