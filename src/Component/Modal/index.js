import React from 'react';
import {View, Modal as RNModal, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';

const propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

function Modal({visible, onClose, children}) {
  return (
    <RNModal visible={visible} transparent animationType="fade">
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </RNModal>
  );
}

Modal.propTypes = propTypes;

export default React.memo(Modal);
