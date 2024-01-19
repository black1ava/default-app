import {useSelector} from 'react-redux';

export default function useLanguage() {
  return useSelector(function (state) {
    return state.Language.code;
  });
}
