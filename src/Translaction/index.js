import LocalizedStrings from 'react-native-localization';
import {LANGUAGE} from '../Constant';

export const translation = new LocalizedStrings({
  [LANGUAGE.EN]: {
    Login: 'Login',
    'Please input your phone': 'Please input your phone',
    'Please Choose Your Language': 'Please Choose Your Language',
    Apply: 'Apply',
  },
  [LANGUAGE.KH]: {
    Login: 'ចូល',
    'Please input your phone': 'សូមបញ្ចូលលេខទូរស័ព្ទរបស់អ្នក',
    'Please Choose Your Language': 'សូមជ្រើសរើសភាសារបស់អ្នក',
    Apply: 'ប្ដូរ',
  },
});
