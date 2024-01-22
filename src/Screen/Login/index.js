import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {styles} from './styles';
import {useLanguage} from '../../Hooks';
import {translation} from '../../Translation';
import {
  PhoneInput,
  Button,
  Modal,
  Alert,
  OTP,
  SocialMediaLogin,
  AutoHeightFastImage,
} from '../../Component';
import {AuthActions} from '../../Store/Action';
import {User} from '../../Modal';
import normalize from 'react-native-normalize';
import {Google} from '../../Constant';

function Login() {
  const language = useLanguage();
  translation.setLanguage(language);
  const dispatch = useDispatch();

  const [phone, setPhone] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [somethingWentWrongAlert, setSomethingWentWrongAlert] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [otp, setOtp] = useState(false);
  const [googleLoadingShow, setGoogleLoadingShow] = useState(false);

  GoogleSignin.configure({
    webClientId: Google.WEB_CLIENT_ID,
  });

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

  const handleOtpToggle = useCallback(function () {
    setOtp(function (state) {
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
        handleOtpToggle();
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
      handleOtpToggle,
    ],
  );

  const handleVerify = useCallback(
    async function (value) {
      handleLoginLoadingToggle();
      handleOtpToggle();
      try {
        await confirmation.confirm(value);
      } catch (error) {
        handleSomethingWentWrongAlertToggle();
      } finally {
        handleLoginLoadingToggle();
      }
    },
    [
      confirmation,
      handleLoginLoadingToggle,
      handleSomethingWentWrongAlertToggle,
      handleOtpToggle,
    ],
  );

  const handleAuthStateChanged = useCallback(
    async function (user) {
      if (user) {
        const newUser = new User(
          user.uid,
          user.displayName,
          user.email,
          user.phoneNumber,
        );

        dispatch(AuthActions.storeUser(newUser));
      }
    },
    [dispatch],
  );

  const handleGoogleLoadingShowToggle = useCallback(function () {
    setGoogleLoadingShow(function (state) {
      return !state;
    });
  }, []);

  const handleSignInWithGoogle = useCallback(
    async function () {
      handleGoogleLoadingShowToggle();

      try {
        await GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
        const {idToken} = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
      } catch (error) {
        console.error('error', error);
        handleSomethingWentWrongAlertToggle();
      } finally {
        handleGoogleLoadingShowToggle();
      }
    },
    [handleGoogleLoadingShowToggle, handleSomethingWentWrongAlertToggle],
  );

  useEffect(
    function () {
      const subscribed = auth().onAuthStateChanged(handleAuthStateChanged);
      return subscribed;
    },
    [handleAuthStateChanged],
  );

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
            title={translation.Login}
            style={styles.button}
            onPress={handleSignInWithPhoneNumber}
            loading={loginLoading}
          />
          <Text style={styles.or}>OR</Text>
          <SocialMediaLogin
            style={styles.button}
            title="Continue with Google"
            icon={
              <AutoHeightFastImage
                source={require('../../assets/google.png')}
                width={normalize(24)}
              />
            }
            loading={googleLoadingShow}
            onPress={handleSignInWithGoogle}
          />
        </View>
        <Modal visible={loginAlert}>
          <Alert
            title={translation['Phone number is required']}
            onClose={handleLoginAlertToggle}
          />
        </Modal>
        <Modal visible={somethingWentWrongAlert}>
          <Alert
            title={translation['Something went wrong, please try again later']}
            onClose={handleSomethingWentWrongAlertToggle}
          />
        </Modal>
        <OTP visible={otp} onVerify={handleVerify} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(Login);
