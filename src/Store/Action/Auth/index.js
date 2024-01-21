import auth from '@react-native-firebase/auth';

import {AuthType} from '../../../Constant';

export function phoneLogin(phone) {
  return async function (dispatch, getState) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      return confirmation;
    } catch (error) {
      throw error;
    }
  };
}

export function storeUser(payload) {
  return {
    type: AuthType.STORE_USER,
    payload,
  };
}
