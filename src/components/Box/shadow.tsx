import React from 'react';

import { shadowOptions } from '../../constants/Tokens/tokens';
import { ShadowBox } from './index';
import { PropsBoxShadow } from './Models';

function Shadow({
  width,
  minWidth,
  height,
  minHeight,
  maxHeight,
  maxWidth,
  mt,
  ml,
  mb,
  mr,
  borderRadiusTopLeft,
  borderRadiusTopRight,
  borderRadiusBottomLeft,
  borderRadiusBottomRight,
  borderBottomWidth,
  borderTopWidth,
  borderLeftWidth,
  borderRightWidth,
  borderColor,
  pd,
  bgColor,
  position,
  type = 'level1',
  children,
  onLayout,
  testID,
  br,
}: PropsBoxShadow) {
  return (
    <ShadowBox
      testID={testID}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
      borderRadiusTopLeft={borderRadiusTopLeft}
      borderRadiusTopRight={borderRadiusTopRight}
      borderRadiusBottomLeft={borderRadiusBottomLeft}
      borderRadiusBottomRight={borderRadiusBottomRight}
      borderBottomWidth={borderBottomWidth}
      borderTopWidth={borderTopWidth}
      borderLeftWidth={borderLeftWidth}
      borderRightWidth={borderRightWidth}
      borderColor={borderColor}
      pd={pd}
      br={br}
      bgColor={bgColor}
      position={position}
      shadow={shadowOptions(type).level}
      style={{
        shadowOpacity: shadowOptions(type).opacity,
        elevation: shadowOptions(type).elevation,
      }}
      onLayout={onLayout}
    >
      {children}
    </ShadowBox>
  );
}

export default Shadow;
