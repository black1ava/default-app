import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    paddingVertical: normalize(50, 'height'),
    borderBottomWidth: 1,
    borderBottomColor: `${Color.DARK}30`,
  },
  listContainer: {
    paddingHorizontal: normalize(20, 'width'),
  },
});
