import React from 'react';

import { PropsHeader } from './Models';
import ViewHeader from './view';

export default function Header({
  mb,
  ml,
  mr,
  mt,
  testID,
  title,
  titleColor,
  onBack,
  onClose,
  onDrawer,
  isHome,
  isSearch,
  isClose,
  isOption,
  onOption,
  editable,
  bgColor,
  badge,
  onPressNotificaiton,
  isNewHeader,
  iconRight,
  value,
  onChangeText,
  placeholder,
  onPressSearch,
  itemsSearch,
  textRight,
  onPressIconRight,
  onPressTextRight,
  onPressIn,
  hideLeftIcon,
}: PropsHeader) {
  return (
    <ViewHeader
      testID={testID}
      title={title}
      titleColor={titleColor}
      isHome={isHome}
      isSearch={isSearch}
      onBack={onBack}
      onClose={onClose}
      onDrawer={onDrawer}
      onPressNotificaiton={onPressNotificaiton}
      badge={badge}
      bgColor={bgColor}
      mb={mb}
      ml={ml}
      mr={mr}
      mt={mt}
      isClose={isClose}
      isOption={isOption}
      onOption={onOption}
      isNewHeader={isNewHeader}
      iconRight={iconRight}
      textRight={textRight}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onPressSearch={onPressSearch}
      itemsSearch={itemsSearch}
      onPressIconRight={onPressIconRight}
      onPressTextRight={onPressTextRight}
      onPressIn={onPressIn}
      editable={editable}
      hideLeftIcon={hideLeftIcon}
    />
  );
}
