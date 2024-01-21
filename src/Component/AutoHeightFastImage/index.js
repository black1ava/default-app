import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import PropTypes, {func} from 'prop-types';
import FastImage from 'react-native-fast-image';

const propTypes = {
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  width: PropTypes.number,
};

function AutoHeightFastImage({source, width}) {
  const [uri, setUri] = useState('');
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(
    function () {
      const {uri} = Image.resolveAssetSource(source);

      Image.getSize(uri, function (width, height) {
        setDimension({
          width,
          height,
        });
        setUri(uri);
      });
    },
    [source],
  );

  return (
    uri && (
      <FastImage
        source={{uri}}
        style={{width, height: (width * dimension.height) / dimension.width}}
      />
    )
  );
}

AutoHeightFastImage.propTypes = propTypes;

export default React.memo(AutoHeightFastImage);
