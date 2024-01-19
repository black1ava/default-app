import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    padding: normalize(15),
    backgroundColor: Color.DARK,
    alignItems: 'center',
    borderRadius: normalize(10),
  },
  title: {
    color: Color.LIGHT,
    fontSize: normalize(16),
    fontFamily: `${Font.NAME}-Medium`,
  },
});
