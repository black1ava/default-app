import React, {useCallback, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {styles} from './styles';
import LanguageItem from '../LanguageItem';
import {LANGUAGE} from '../../Constant';
import Button from '../Button';
import {useLanguage} from '../../Hooks';
import {LanguageActions} from '../../Store/Action';
import {translation} from '../../Translaction';

const propTypes = {
  onClose: PropTypes.func,
};

const LANGUAGES = [
  {
    id: LANGUAGE.EN,
    name: 'English',
    thumbnail: require('../../assets/english.png'),
  },
  {
    id: LANGUAGE.KH,
    name: 'ខ្មែរ',
    thumbnail: require('../../assets/khmer.png'),
  },
];

function LanguageModal({onClose}) {
  const currentLanguage = useLanguage();
  const [language, setLanguage] = useState(currentLanguage);
  const dispatch = useDispatch();
  translation.setLanguage(currentLanguage);

  const handleLanguageChange = useCallback(function (value) {
    setLanguage(value);
  }, []);

  const renderItem = useCallback(
    function ({item}) {
      return (
        <LanguageItem
          title={item.name}
          source={item.thumbnail}
          code={item.id}
          activeCode={language}
          onPress={handleLanguageChange}
        />
      );
    },
    [language],
  );

  const extractItemKey = useCallback(function (item) {
    return item.id;
  }, []);

  const handlePress = useCallback(
    function () {
      dispatch(LanguageActions.setLanguage(language));
      onClose();
    },
    [language, onClose],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {translation['Please Choose Your Language']}
      </Text>
      <FlatList
        data={LANGUAGES}
        renderItem={renderItem}
        keyExtractor={extractItemKey}
        contentContainerStyle={styles.contentContainer}
      />
      <Button title={translation['Apply']} onPress={handlePress} />
    </View>
  );
}

LanguageModal.propTypes = propTypes;

export default React.memo(LanguageModal);
