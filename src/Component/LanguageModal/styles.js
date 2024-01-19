import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Font} from '../../Constant';

export const styles = StyleSheet.create({
  title: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(18),
  },
  container: {
    gap: normalize(15, 'height'),
  },
  contentContainer: {
    gap: normalize(15, 'height'),
  },
});
