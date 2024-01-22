import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: normalize(10, 'height'),
  },
  title: {
    fontSize: normalize(18),
    fontFamily: `${Font.NAME}-Medium`,
  },
  button: {
    flex: 1,
  },
  buttonCancel: {
    flex: 1,
    backgroundColor: `${Color.DARK}30`,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: normalize(10, 'width'),
  },
  cancel: {
    color: Color.DARK,
  },
});
