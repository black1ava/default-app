import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(10, 'width'),
  },
  title: {
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
    flex: 1,
  },
});
