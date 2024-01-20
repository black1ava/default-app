import auth from '@react-native-firebase/auth';

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