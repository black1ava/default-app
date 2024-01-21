import React, {useCallback, useState} from 'react';
import {
  Modal,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PropTypes from 'prop-types';

import {styles} from './styles';
import Button from '../Button';

const propTypes = {
  visible: PropTypes.bool,
  onVerify: PropTypes.func,
};

const CELL_COUNT = 6;

function OTP({visible, onVerify}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handlePress = useCallback(
    function () {
      onVerify(value);
    },
    [value, onVerify],
  );

  const handleKeyboardDismiss = useCallback(function () {
    Keyboard.dismiss();
  }, []);

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <KeyboardAvoidingView style={styles.mainContainer} behavior="height">
          <View style={styles.container}>
            <Text style={styles.title}>Please verify your OTP</Text>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            <Button
              style={styles.button}
              title="Verify"
              onPress={handlePress}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

OTP.propTypes = propTypes;

export default React.memo(OTP);
