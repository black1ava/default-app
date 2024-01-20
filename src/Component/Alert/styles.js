import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {Font} from '../../Constant';

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
    width: '100%',
  },
});
