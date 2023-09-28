import React, { useRef } from "react";
import { Platform, TextInput as InputText } from "react-native";

import { useTheme } from "styled-components";

import theme from "../../theme/themes";
import { Content, TextInput } from "./styles";

import { textInputOptions } from "../../constants/Tokens/tokens";
import { Box } from "../Box";
import Icon from "../Icons";
import { Text } from "../Text";
import { InputTextViewProps } from "./Models";

export default function Input({
  type,
  placeholder,
  editable = true,
  error,
  textError = "",
  description,
  keyboardType,
  secureTextEntry,
  value,
  uppercase,
  maxLength,
  secureText,
  placeholderTextColor,
  setSecureText,
  textColor,
  onChangeText,
  isValid = () => false,
  onPressSearch,
  onPressList,
  itemsSearch,
  textInputColor,
  componentRef,
  visibleValidatePassword,
  setVisibleValidatePassword,
  mt,
  ml,
  mb,
  mr,
  bgColor,
  onPressIn,
  returnKeyType,
  testID,
  isSearch,
  isLoading,
}: InputTextViewProps) {
  const { colors } = useTheme() || theme;
  const inputRef = useRef<InputText>(null);
  const regexHaveNumber = /[0-9]/;
  const regexHaveUppercase = /[A-Z]/;
  const regexHaveCaracter = /[a-z]/;

  return (
    <Box
      width={isSearch || type === "validatePassword" ? "100%" : "auto"}
      height={isSearch && itemsSearch ? "auto" : "auto"}
      justify={isSearch && itemsSearch ? "flex-start" : "flex-end"}
      index={99999}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
    >
      <Box width={type === "validatePassword" ? "100%" : "auto"}>
        {type !== "search" && (
          <Text type="paragraphSM" color={textColor()} numberOfLines={1}>
            {value ? placeholder : " "}
          </Text>
        )}
        <Content
          type={textInputOptions(type)}
          color={colors}
          error={error}
          active={value}
          editable={editable}
          focus={
            componentRef?.current?.isFocused() || inputRef?.current?.isFocused()
          }
          bgColor={type === "searchLigth" ? bgColor : ""}
        >
          <Box width="100%">
            <TextInput
              ref={componentRef || inputRef}
              color={colors}
              placeholder={placeholder}
              textInputColor={textInputColor}
              onPressIn={onPressIn}
              placeholderTextColor={placeholderTextColor || colors.DARK_BASE_02}
              editable={editable}
              error={error}
              small={type === "small"}
              type={textInputOptions(type)}
              selectionColor={colors.HIGHLIGHT_COLOR_03}
              keyboardType={
                Platform.OS === "android" && uppercase
                  ? "visible-password"
                  : keyboardType
              }
              secureTextEntry={
                Platform.OS === "android" && uppercase ? true : secureText
              }
              onChangeText={(text) => {
                if (onChangeText) {
                  uppercase
                    ? onChangeText(text.toUpperCase())
                    : onChangeText(text);
                  isValid(
                    !!(
                      value &&
                      value.length >= 7 &&
                      value.length <= 20 &&
                      regexHaveUppercase.test(value) &&
                      regexHaveCaracter.test(value) &&
                      regexHaveNumber.test(value)
                    )
                  );
                }
              }}
              value={value}
              maxLength={type === "validatePassword" ? 20 : maxLength}
              autoCorrect={false}
              autoCapitalize={
                Platform.OS === "android" && uppercase ? undefined : "none"
              }
              autoCompleteType="off"
              numberOfLines={1}
              maxFontSizeMultiplier={1.2}
              input={type}
              returnKeyType={returnKeyType}
              onPressOut={() => setVisibleValidatePassword(true)}
              testID={testID}
            />
          </Box>

          <Box position="absolute">
            {isSearch && (
              <Icon
                mr="smaller"
                name={
                  type === "searchLigth" && error
                    ? "icon-close-circle"
                    : "icon-search"
                }
                size="xs"
                color={
                  type === "searchLigth" && error
                    ? colors.ERROR_BASE_04
                    : colors.LIGHT_BASE_05
                }
                testID="DS-Icon-Search"
                onPress={() => onPressSearch && onPressSearch(value)}
              />
            )}
            {error &&
              !secureTextEntry &&
              type !== "search" &&
              type !== "searchLigth" && (
                <Icon
                  name="icon-close-circle"
                  size="xs"
                  color={colors.ERROR_BASE_04}
                />
              )}
            {secureTextEntry &&
              (secureText ? (
                <Icon
                  onPress={() => setSecureText(!secureText)}
                  name="icon-eye-hidden"
                  size="xs"
                  color={colors.PRYMARY_BASE_01}
                  testID="DS-TextInput-hidden-password"
                />
              ) : (
                <Icon
                  onPress={() => setSecureText(!secureText)}
                  name="icon-eye"
                  size="xs"
                  color={colors.PRYMARY_BASE_01}
                  testID="DS-TextInput-show-password"
                />
              ))}
          </Box>
        </Content>

        {description ? (
          <Text mt="quark" color={colors.DARK_BASE_02} type="paragraphSM">
            {description}
          </Text>
        ) : (
          <Text mt="quark" color={colors.ERROR_BASE_04} type="paragraphSM">
            {error && textError ? textError : ""}
          </Text>
        )}
      </Box>
    </Box>
  );
}
