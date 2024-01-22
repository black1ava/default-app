import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20, 'width'),
    gap: normalize(10, 'height'),
  },
  mainContainer: {
    flex: 1,
  },
  button: {
    width: '100%',
  },
  or: {
    fontFamily: `${Font.NAME}-Regular`,
    fontSize: normalize(18),
  },
});
