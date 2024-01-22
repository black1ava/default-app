import React, {useCallback, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {widthToDP as wp} from 'react-native-responsive-screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import AutoheightFastImage from '../AutoHeightFastImage';
import {styles} from './styles';
import DrawerItem from '../DrawerItem';
import Modal from '../Modal';
import Information from '../Information';
import {translation} from '../../Translation';
import {useLanguage} from '../../Hooks';
import Alert from '../Alert';
import {AuthActions} from '../../Store/Action';

function DrawerContent() {
  const [showInformation, setShowInformation] = useState(false);
  const language = useLanguage();
  const [loading, setLoading] = useState(false);
  const [showSomethingWentWrongAlert, setShowSomethingWentWrongAlert] =
    useState(false);
  const dispatch = useDispatch();

  translation.setLanguage(language);

  const handleShowInformationToggle = useCallback(function () {
    setShowInformation(function (state) {
      return !state;
    });
  }, []);

  const handleLoadingToggle = useCallback(function () {
    setLoading(function (state) {
      return !state;
    });
  }, []);

  const handleShowSomethingWentWrongAlertToggle = useCallback(function () {
    setShowSomethingWentWrongAlert(function (state) {
      return !state;
    });
  }, []);

  const handleLogout = useCallback(
    async function () {
      handleLoadingToggle();

      try {
        await auth().signOut();
        dispatch(AuthActions.clearUser());
      } catch (error) {
        console.error('error', error);
        handleShowSomethingWentWrongAlertToggle();
      } finally {
        handleLoadingToggle();
        handleShowInformationToggle();
      }
    },
    [handleLoadingToggle, handleShowInformationToggle, dispatch],
  );

  return (
    <View>
      <View style={styles.logoContainer}>
        <AutoheightFastImage
          source={require('../../assets/logo.png')}
          width={wp('30%')}
        />
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
          <DrawerItem
            first
            icon={<AntDesign name="logout" size={normalize(24)} />}
            title={translation.Logout}
            onPress={handleShowInformationToggle}
          />
        </ScrollView>
      </View>
      <Modal visible={showInformation}>
        <Information
          title={translation['Are you sure you want to logout?']}
          onClose={handleShowInformationToggle}
          actionTitle={translation.Logout}
          cancelTitle={translation.Cancel}
          onPress={handleLogout}
          loading={loading}
        />
      </Modal>
      <Modal visible={showSomethingWentWrongAlert}>
        <Alert
          title={translation['Something went wrong, please try again later']}
          onClose={handleShowSomethingWentWrongAlertToggle}
        />
      </Modal>
    </View>
  );
}

export default React.memo(DrawerContent);
