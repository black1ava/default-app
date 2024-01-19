import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    gap: normalize(15, 'width'),
  },
  title: {
    fontSize: normalize(16),
    fontFamily: `${Font.NAME}-Medium`,
    flex: 1,
  },
});
