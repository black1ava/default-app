import {AuthType} from '../../../Constant';

const initialState = {
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AuthType.STORE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case AuthType.CLEAR_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
