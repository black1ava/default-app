import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(10, 'height'),
  },
  title: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(18),
  },
  codeFieldRoot: {
    gap: normalize(10, 'width'),
  },
  cell: {
    width: normalize(40),
    height: normalize(40),
    lineHeight: normalize(38),
    fontSize: normalize(24),
    borderWidth: 2,
    borderColor: `${Color.DARK}30`,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: Color.DARK,
  },
  mainContainer: {
    flex: 1,
  },
  button: {
    width: '80%',
  },
});
