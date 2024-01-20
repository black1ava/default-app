import React, {useCallback, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {styles} from './styles';
import {useLanguage} from '../../Hooks';
import {translation} from '../../Translaction';
import {PhoneInput, Button, Modal, Alert} from '../../Component';
import {AuthActions} from '../../Store/Action';

function Login() {
  const language = useLanguage();
  translation.setLanguage(language);
  const dispatch = useDispatch();

  const [phone, setPhone] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [somethingWentWrongAlert, setSomethingWentWrongAlert] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  const handlePhoneChange = useCallback(function (value) {
    setPhone(value);
  }, []);

  const handleKeyboardDismiss = useCallback(function () {
    Keyboard.dismiss();
  }, []);

  const handleLoginLoadingToggle = useCallback(function () {
    setLoginLoading(function (state) {
      return !state;
    });
  }, []);

  const handleLoginAlertToggle = useCallback(function () {
    setLoginAlert(function (state) {
      return !state;
    });
  }, []);

  const handleSomethingWentWrongAlertToggle = useCallback(function () {
    setSomethingWentWrongAlert(function (state) {
      return !state;
    });
  }, []);

  const handleSignInWithPhoneNumber = useCallback(
    async function () {
      if (phone === '') {
        handleLoginAlertToggle();
        return;
      }

      const phoneNumber = phone[0] === '0' ? phone.substring(1) : phone;
      const formattedPhoneNumber = `+855${phoneNumber}`;

      handleLoginLoadingToggle();

      try {
        const confirmation = await dispatch(
          AuthActions.phoneLogin(formattedPhoneNumber),
        );

        setConfirmation(confirmation);
      } catch (error) {
        handleSomethingWentWrongAlertToggle();
        console.error(error);
      } finally {
        handleLoginLoadingToggle();
      }
    },
    [
      phone,
      handleLoginLoadingToggle,
      handleLoginAlertToggle,
      handleSomethingWentWrongAlertToggle,
      dispatch,
    ],
  );

  console.log(confirmation);

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <KeyboardAvoidingView style={styles.mainContainer} behavior="height">
        <View style={styles.container}>
          <PhoneInput
            value={phone}
            onChange={handlePhoneChange}
            placeholder={translation['Please input your phone']}
          />
          <Button
            title="Login"
            style={styles.button}
            onPress={handleSignInWithPhoneNumber}
            loading={loginLoading}
          />
        </View>
        <Modal visible={loginAlert}>
          <Alert
            title="Phone number is required"
            onClose={handleLoginAlertToggle}
          />
        </Modal>
        <Modal visible={somethingWentWrongAlert}>
          <Alert
            title="Something went wrong, please try again later"
            onClose={handleSomethingWentWrongAlertToggle}
          />
        </Modal>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(Login);
