import {LANGUAGE, LanguageType} from '../../../Constant';

const initialState = {
  code: LANGUAGE.EN,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LanguageType.CHANGE_LANGUAGE:
      return {
        ...state,
        code: action.payload,
      };

    default:
      return state;
  }
}
