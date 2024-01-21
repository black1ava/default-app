import LocalizedStrings from 'react-native-localization';
import {LANGUAGE} from '../Constant';

export const translation = new LocalizedStrings({
  [LANGUAGE.EN]: {
    Login: 'Login',
    'Please input your phone': 'Please input your phone',
    'Please Choose Your Language': 'Please Choose Your Language',
    Apply: 'Apply',
    'Phone number is required': 'Phone number is required',
    'Something went wrong, please try again later':
      'Something went wrong, please try again later',
    Okay: 'Okay',
    Home: 'Home',
  },
  [LANGUAGE.KH]: {
    Login: 'ចូល',
    'Please input your phone': 'សូមបញ្ចូលលេខទូរស័ព្ទរបស់អ្នក',
    'Please Choose Your Language': 'សូមជ្រើសរើសភាសារបស់អ្នក',
    Apply: 'ប្ដូរ',
    'Phone number is required': 'លេខទូរស័ព្ទត្រូវបានទាមទារ',
    'Something went wrong, please try again later':
      'មានអ្វីខុសសូមព្យាយាមម្តងទៀតនៅពេលក្រោយ',
    Okay: 'យល់ព្រម',
    Home: 'ទំព័រដើម',
  },
});
