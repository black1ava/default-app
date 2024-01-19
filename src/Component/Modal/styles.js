import {StyleSheet} from 'react-native';
import {
  widthToDP as wp,
  heightToDP as hp,
} from 'react-native-responsive-screens';
import normalize from 'react-native-normalize';

import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${Color.DARK}90`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: wp('90%'),
    padding: normalize(20, 'width'),
    backgroundColor: Color.LIGHT,
    borderRadius: normalize(10),
  },
  backdrop: {
    position: 'absolute',
    width: wp('100%'),
    height: hp('100%'),
  },
});
