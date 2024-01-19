import {LanguageType} from '../../../Constant';

export function setLanguage(payload) {
  return {
    type: LanguageType.CHANGE_LANGUAGE,
    payload,
  };
}
