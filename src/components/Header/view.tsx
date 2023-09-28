import React from "react";

import { useTheme } from "styled-components";

import theme from "../../theme/themes";

import { Box, TouchBox } from "../Box";
import ShadowBox from "../Box/shadow";
import Icon from "../Icons";
import { Text } from "../Text";
import TextInput from "../TextInput";
import normalize from "../../constants/normalize";
import { PropsHeader } from "./Models";

export default function Header({
  mb,
  ml,
  mr,
  mt,
  testID,
  title,
  titleColor,
  isHome,
  isSearch,
  isClose,
  badge = 0,
  bgColor,
  onBack,
  onClose,
  onDrawer,
  onPressNotificaiton,
  value,
  placeholder,
  onChangeText,
  onPressSearch,
  itemsSearch,
  isOption,
  onOption,
  isNewHeader,
  iconRight,
  textRight,
  onPressTextRight,
  onPressIconRight,
  onPressIn,
  editable = true,
  hideLeftIcon,
}: PropsHeader) {
  const { colors } = useTheme() || theme;

  const renderIcons = () => {
    if (isClose) {
      return (
        <TouchBox testID="DS-Header-onClose" onPress={onClose}>
          <Icon name="icon-close" size="xs" color={colors.PRYMARY_BASE_02} />
        </TouchBox>
      );
    }
    if (onBack && isOption) {
      return (
        <>
          <TouchBox testID="DS-Header-onBack" onPress={onBack}>
            {!hideLeftIcon && (
              <Icon
                name="icon-arrow-back"
                size="xs"
                color={colors.PRYMARY_BASE_02}
              />
            )}
          </TouchBox>
          <Box direction align="center">
            <TouchBox
              testID="DS-Header-onPressIconRight"
              onPress={onPressIconRight || onOption}
            >
              <Icon
                name={iconRight ?? "icon-options"}
                size="sx"
                color={colors.PRYMARY_BASE_02}
              />
            </TouchBox>
            <TouchBox
              testID="DS-Header-onPressTextRight"
              onPress={onPressTextRight}
            >
              {textRight && <Text ml="quark">{textRight}</Text>}
            </TouchBox>
          </Box>
        </>
      );
    }
    if (isOption) {
      return (
        <Box direction align="center">
          <TouchBox
            testID="DS-Header-onPressIconRight"
            onPress={onPressIconRight || onOption}
          >
            <Icon
              name={iconRight ?? "icon-options"}
              size="sx"
              color={colors.PRYMARY_BASE_02}
            />
          </TouchBox>
          <TouchBox
            testID="DS-Header-onPressTextRight"
            onPress={onPressTextRight}
          >
            {textRight && <Text ml="quark">{textRight}</Text>}
          </TouchBox>
        </Box>
      );
    }
    if (onBack && !hideLeftIcon) {
      return (
        <TouchBox testID="DS-Header-onBack" onPress={onBack}>
          <Icon
            name="icon-arrow-back"
            size="xs"
            color={colors.PRYMARY_BASE_02}
          />
        </TouchBox>
      );
    }

    if (hideLeftIcon) {
      return null;
    }

    return (
      <TouchBox testID="DS-onPress-Header-onBack" onPress={onBack}>
        <Icon name="icon-arrow-back" size="xs" color={colors.PRYMARY_BASE_02} />
      </TouchBox>
    );
  };

  const justifyIcons = () => {
    if (isClose) {
      return "flex-end";
    }
    if (onBack && isOption) {
      return "space-between";
    }
    if (isOption) {
      return "flex-end";
    }
    if (onBack) {
      return "flex-start";
    }
    return "flex-start";
  };

  return (
    <ShadowBox
      testID={testID}
      type={!isHome ? "level4" : "none"}
      bgColor={!isHome ? bgColor || colors.LIGHT_BASE_01 : "transparent"}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
    >
      <Box
        width="100%"
        style={{
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        {isHome ? (
          <Box width="100%" align="center" justify="space-between" direction>
            <Box align="center" direction>
              <TouchBox
                testID="DS-Header-onDrawer"
                onPress={onDrawer}
                mb={isSearch ? "nano" : "none"}
              >
                <Icon name="icon-menu" size="sm" color={colors.LIGHT_BASE_01} />
              </TouchBox>
              <Box width="85%">
                {isSearch ? (
                  <Box mt="xxxxs" pd="innerMiddle">
                    <TextInput
                      testID="DS-Header-TextInput"
                      type="search"
                      value={value}
                      onChangeText={(text) =>
                        onChangeText && onChangeText(text)
                      }
                      onPressSearch={onPressSearch}
                      itemsSearch={itemsSearch}
                      placeholder={placeholder}
                      onPressIn={onPressIn}
                      editable={editable}
                    />
                  </Box>
                ) : (
                  <Text
                    ml="xs"
                    color={titleColor ?? colors.LIGHT_BASE_01}
                    type="paragraphXXXL"
                  >
                    {title}
                  </Text>
                )}
              </Box>
            </Box>

            <TouchBox
              testID="DS-Header-onPressNotificaiton"
              onPress={onPressNotificaiton}
            >
              <Box
                width={normalize(65)}
                height={normalize(40)}
                position="absolute"
              >
                <Icon
                  style={{ position: "absolute", marginTop: 6 }}
                  name="icon-notification"
                  size="xs"
                  color={colors.LIGHT_BASE_01}
                />
                {badge > 0 && (
                  <Box
                    width={20}
                    height={20}
                    ml="xs"
                    mb="xs"
                    align="center"
                    justify="center"
                    bgColor={colors.LIGHT_BASE_01}
                    borderRadiusTopLeft="circle"
                    borderRadiusTopRight="circle"
                    borderRadiusBottomLeft="circle"
                    borderRadiusBottomRight="circle"
                    borderTopWidth="small"
                    borderBottomWidth="small"
                    borderLeftWidth="small"
                    borderRightWidth="small"
                    borderColor={colors.PRYMARY_BASE_01}
                  >
                    <Text color={colors.PRYMARY_BASE_01} type="paragraphXXS">
                      {badge <= 99 ? badge : "+99"}
                    </Text>
                  </Box>
                )}
              </Box>
            </TouchBox>
          </Box>
        ) : (
          <Box
            width="100%"
            height={isNewHeader ? normalize(60) : normalize(48)}
            align="center"
            justify="space-between"
            direction
          >
            <Text
              width="100%"
              position="absolute"
              align="center"
              color={
                titleColor ?? isNewHeader
                  ? colors.PRYMARY_BASE_02
                  : colors.PRYMARY_BASE_01
              }
              type={isNewHeader ? "paragraphXXXL" : "paragraphLG"}
              maxFontSizeMultiplier={1.2}
            >
              {title}
            </Text>
            <Box width="100%" align="center" justify={justifyIcons()} direction>
              {renderIcons()}
            </Box>
          </Box>
        )}
      </Box>
    </ShadowBox>
  );
}
