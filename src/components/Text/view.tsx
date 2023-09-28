import React from "react";
import { useWindowDimensions } from "react-native";

import { TextRegular } from "./styles";

import {
  addFormattingText,
  boldRegex,
  isAsterisks,
  linkRegex,
} from "../../constants/format.text";
import { textOptions } from "../../constants/Tokens/tokens";
import { TextPropsComponentView } from "./Models";

function Text({
  width,
  maxWidth,
  height,
  children,
  type = "paragraphMD",
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
  testID = "DS-text-core",
}: TextPropsComponentView) {
  const { scale } = useWindowDimensions();

  const renderText = (part: string, index: number) => {
    if (typeof part === "string" && !part.match(isAsterisks)) {
      const regexCaracter = /[a-zA-Z0-9]/;
      const isBold = part?.match(boldRegex);
      const isLink = part?.match(linkRegex) as RegExpMatchArray;
      const isCaracter = regexCaracter.test(part);

      let text = isCaracter ? part.replace(/\*\*/g, "") : part;
      let linkUrl = "";

      if (isLink) {
        const linkParts = text.match(linkRegex) as RegExpMatchArray;
        [, text] = linkParts[0].match(/\[(.*?)\]/) as RegExpMatchArray;
        [, linkUrl] = linkParts[0]?.match(/\((.*?)\)/) as RegExpMatchArray;
      }

      if (isBold) {
        return (
          <TextRegular
            key={index.valueOf()}
            lineThrough={lineThrough}
            width={width}
            maxWidth={maxWidth}
            height={height}
            padding={padding}
            position={position}
            ellipsizeMode="tail"
            numberOfLines={numberOfLines}
            allowFontScaling={allowFontScaling}
            maxFontSizeMultiplier={maxFontSizeMultiplier}
            mt={mt}
            ml={ml}
            mb={mb}
            mr={mr}
            type={textOptions(type)}
            scale={scale}
            underline={underline ?? !!isLink}
            color={isLink ? colorLink ?? color : colorBold ?? color}
            align={align}
            onPress={
              (onPress || onLink) && linkUrl
                ? () => {
                    onPress && onPress(linkUrl);
                    onLink && onLink(linkUrl);
                  }
                : undefined
            }
            accessibilityLabel={accessibilityLabel}
            accessible={false}
            bold
          >
            {text}
          </TextRegular>
        );
      }

      if (isLink) {
        return (
          <TextRegular
            key={index.valueOf()}
            lineThrough={lineThrough}
            width={width}
            maxWidth={maxWidth}
            height={height}
            padding={padding}
            position={position}
            ellipsizeMode="tail"
            numberOfLines={numberOfLines}
            allowFontScaling={allowFontScaling}
            maxFontSizeMultiplier={maxFontSizeMultiplier}
            mt={mt}
            ml={ml}
            mb={mb}
            mr={mr}
            type={textOptions(type)}
            scale={scale}
            underline
            color={colorLink ?? color}
            align={align}
            onPress={
              (onPress || onLink) && linkUrl
                ? () => {
                    onPress && onPress(linkUrl);
                    onLink && onLink(linkUrl);
                  }
                : undefined
            }
            accessibilityLabel={accessibilityLabel}
            accessible={false}
            bold={!!isBold}
          >
            {text}
          </TextRegular>
        );
      }
    }

    return (
      <TextRegular
        key={index.valueOf()}
        lineThrough={lineThrough}
        width={width}
        maxWidth={maxWidth}
        height={height}
        padding={padding}
        position={position}
        ellipsizeMode="tail"
        numberOfLines={numberOfLines}
        allowFontScaling={allowFontScaling}
        maxFontSizeMultiplier={maxFontSizeMultiplier}
        mt={mt}
        ml={ml}
        mb={mb}
        mr={mr}
        type={textOptions(type)}
        scale={scale}
        underline={underline}
        color={color}
        align={align}
        onPress={onPress}
        accessibilityLabel={accessibilityLabel}
        accessible={false}
      >
        {part}
      </TextRegular>
    );
  };

  return (
    <TextRegular
      lineThrough={lineThrough}
      testID={testID}
      width={width}
      maxWidth={maxWidth}
      height={height}
      padding={padding}
      position={position}
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
      type={textOptions(type)}
      scale={scale}
      underline={underline}
      color={color}
      align={align}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessible={false}
    >
      {typeof children !== "string" && !Array.isArray(children)
        ? children
        : addFormattingText(children)?.map((part, index) =>
            renderText(part, index)
          )}
    </TextRegular>
  );
}

export default Text;
