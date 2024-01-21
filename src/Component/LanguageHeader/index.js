import React, {useCallback, useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AutoHeightFastImage from '../AutoHeightFastImage';
import Modal from '../Modal';
import LanguageModal from '../LanguageModal';
import {useLanguage} from '../../Hooks';
import {LANGUAGE} from '../../Constant';
import {styles} from './styles';

function LanguageHeader() {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const language = useLanguage();

  const handleShowLanguageModalToggle = useCallback(function () {
    setShowLanguageModal(function (state) {
      return !state;
    });
  }, []);

  const image = useMemo(
    function () {
      return language === LANGUAGE.KH
        ? require('../../assets/khmer.png')
        : require('../../assets/english.png');
    },
    [language],
  );

  return (
    <React.Fragment>
      <TouchableOpacity
        style={styles.container}
        onPress={handleShowLanguageModalToggle}>
        <AutoHeightFastImage source={image} width={normalize(32, 'width')} />
        <AntDesign name="caretdown" size={normalize(14)} />
      </TouchableOpacity>
      <Modal
        visible={showLanguageModal}
        onClose={handleShowLanguageModalToggle}>
        <LanguageModal onClose={handleShowLanguageModalToggle} />
      </Modal>
    </React.Fragment>
  );
}

export default React.memo(LanguageHeader);
