import React, { useCallback, useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";

import normalize from "../../constants/normalize";
import { iconSizeOptions } from "../../constants/Tokens/tokens";
import { Box, TouchBox } from "../Box";
import { iconSelected } from "./images";
import { PropsIcon } from "./Models";

function Icon({
  size,
  name,
  style,
  color,
  onPress,
  iconSet,
  testID,
  disabled = !onPress,
  mb,
  ml,
  mr,
  mt,
}: PropsIcon) {
  const [isImage, setImage] = useState(false);

  const sourceImage = (): ImageSourcePropType => {
    if (name) {
      return Object.prototype.hasOwnProperty.call(iconSelected, name)
        ? iconSelected[name]
        : iconSelected.undefined;
    }
    return [];
  };

  const verifyImage = useCallback(() => {
    if (Object.prototype.hasOwnProperty.call(iconSelected, name)) {
      return setImage(true);
    }
    return setImage(false);
  }, [name]);

  function iconExternal() {
    return (
      <TouchBox testID={testID} onPress={onPress} disabled={disabled}>
        <Image
          width={iconSizeOptions(size)}
          height={iconSizeOptions(size)}
          style={style}
          source={sourceImage()}
          resizeMode="contain"
        />
      </TouchBox>
    );
  }

  useEffect(() => {
    verifyImage();
  }, [verifyImage]);

  return (
    <Box mb={mb} ml={ml} mr={mr} mt={mt}>
      {iconExternal()}
    </Box>
  );
}

export default Icon;
