import React, { useState } from "react";

import { useTheme } from "styled-components";

import theme from "../../theme/themes";

import { InputTextProps } from "./Models";
import View from "./view";

function Input({
  type = "default",
  placeholder,
  editable = true,
  keyboardType,
  secureTextEntry,
  value,
  uppercase,
  maxLength,
  itemsSearch,
  textInputColor,
  placeholderTextColor,
  componentRef,
  onChangeText,
  isValid,
  onPressSearch,
  onPressList,
  mt,
  ml,
  mb,
  mr,
  bgColor,
  onPressIn,
  returnKeyType,
  testID,
  isLoading,
}: InputTextProps) {
  const { colors } = useTheme() || theme;
  const [secureText, setSecureText] = useState<boolean>(!!secureTextEntry);
  const [visibleValidatePassword, setVisibleValidatePassword] = useState(false);
  const isSearch =
    type === "search" ||
    type === "searchLigth" ||
    type === "searchResultAction" ||
    type === "searchResultList";

  const textColor = (): string => {
    return colors.DARK_BASE_02;
  };

  return (
    <View
      placeholder={placeholder}
      editable={editable}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      isValid={isValid}
      value={value}
      uppercase={uppercase}
      maxLength={maxLength}
      secureText={secureText}
      setSecureText={setSecureText}
      textColor={textColor}
      onPressSearch={onPressSearch}
      onPressList={onPressList}
      type={type}
      itemsSearch={itemsSearch}
      placeholderTextColor={placeholderTextColor}
      textInputColor={textInputColor}
      componentRef={componentRef}
      visibleValidatePassword={visibleValidatePassword}
      setVisibleValidatePassword={setVisibleValidatePassword}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
      bgColor={bgColor}
      onPressIn={onPressIn}
      returnKeyType={returnKeyType}
      testID={testID}
      isSearch={isSearch}
      isLoading={isLoading}
    />
  );
}

export default Input;
