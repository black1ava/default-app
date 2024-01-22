import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {Color, Font} from '../../Constant';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.DARK,
    padding: normalize(15),
    borderRadius: normalize(10),
  },
  title: {
    color: Color.LIGHT,
    fontFamily: `${Font.NAME}-Medium`,
    fontSize: normalize(16),
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
});
