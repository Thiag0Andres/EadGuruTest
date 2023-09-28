import React from "react";

import { TextPropsComponent } from "./Models";
import View from "./view";

export function Text({
  width,
  maxWidth,
  height,
  children,
  type,
  underline,
  color,
  align,
  mt,
  ml,
  mb,
  mr,
  numberOfLines,
  padding,
  position,
  allowFontScaling = true,
  maxFontSizeMultiplier,
  accessibilityLabel,
  onPress,
  onLink,
  lineThrough,
  colorLink,
  colorBold,
  testID,
}: TextPropsComponent) {
  return (
    <View
      lineThrough={lineThrough}
      testID={testID || "DS-text-core"}
      width={width}
      maxWidth={maxWidth}
      height={height}
      padding={padding}
      position={position}
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
      type={type}
      underline={underline}
      color={color}
      align={align}
      onPress={onPress}
      onLink={onLink}
      accessibilityLabel={accessibilityLabel}
      colorLink={colorLink}
      colorBold={colorBold}
    >
      {children}
    </View>
  );
}
