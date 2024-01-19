import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  phoneContainer: {
    flex: 1,
    gap: normalize(15, 'width'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.LIGHT,
    elevation: 5,
    borderRadius: normalize(10),
    padding: normalize(15),
  },
  code: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(18),
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: normalize(18),
    fontFamily: `${Font.NAME}-Medium`,
  },
  column: {
    width: 1,
    height: normalize(32, 'height'),
    backgroundColor: Color.DARK,
  },
});
