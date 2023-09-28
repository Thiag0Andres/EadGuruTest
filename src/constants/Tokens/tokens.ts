/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsBorderWidth, PropsShadowTokens } from "../../theme/Models";
import {
  PropsColorsCore,
  PropsTokenColorsCore,
} from "../../theme/Models/type.colors";
import { PropsSizeIconCore } from "../../theme/Models/type.icon";
import theme from "../../theme/themes";

import * as spaces from "../../settings/environment";

type MapOptions = {
  [key: string]: any;
};

export const horizontalMarginMapToken: MapOptions = {
  quark: spaces.MARGIN_FLAT_QUARK,
  nano: spaces.MARGIN_FLAT_NANO,
  xxxxs: spaces.MARGIN_FLAT_XXXXS,
  xxxs: spaces.MARGIN_FLAT_XXXS,
  xxs: spaces.MARGIN_FLAT_XXS,
  xs: spaces.MARGIN_FLAT_XS,
  tiny: spaces.MARGIN_FLAT_TINY,
  smaller: spaces.MARGIN_FLAT_SMALLER,
  small: spaces.MARGIN_FLAT_SMALL,
  middle: spaces.MARGIN_FLAT_MIDDLE,
  meddium: spaces.MARGIN_FLAT_MEDIUM,
  large: spaces.MARGIN_FLAT_LARGE,
  larger: spaces.MARGIN_FLAT_LARGER,
  xl: spaces.MARGIN_FLAT_XL,
  xxl: spaces.MARGIN_FLAT_XXL,
  xxxl: spaces.MARGIN_FLAT_XXXL,
  huge: spaces.MARGIN_FLAT_HUGE,
  undefined: 0,
};

export const transformHorizontalMargin = (margin?: string) => {
  if (margin) {
    return Object.hasOwnProperty.call(horizontalMarginMapToken, margin)
      ? horizontalMarginMapToken[margin]
      : horizontalMarginMapToken.undefined;
  }

  return horizontalMarginMapToken.undefined;
};

export const verticalMarginMapToken: MapOptions = {
  quark: spaces.MARGIN_STANDING_QUARK,
  nano: spaces.MARGIN_STANDING_NANO,
  xs: spaces.MARGIN_STANDING_XS,
  smaller: spaces.MARGIN_STANDING_SMALLER,
  small: spaces.MARGIN_STANDING_SMALL,
  middle: spaces.MARGIN_STANDING_MIDDLE,
  half: spaces.MARGIN_STANDING_HALF,
  medium: spaces.MARGIN_STANDING_MEDIUM,
  large: spaces.MARGIN_STANDING_LARGE,
  larger: spaces.MARGIN_STANDING_LARGER,
  undefined: 0,
};

export const transformVerticalMargin = (margin?: string) => {
  if (margin) {
    return Object.hasOwnProperty.call(verticalMarginMapToken, margin)
      ? verticalMarginMapToken[margin]
      : verticalMarginMapToken.undefined;
  }

  return verticalMarginMapToken.undefined;
};

const textInputMap: MapOptions = {
  default: theme.styleTextInput.default,
  small: theme.styleTextInput.small,
  search: theme.styleTextInput.search,
  undefined: theme.styleTextInput.default,
};

export const textInputOptions = (margin?: string) => {
  return Object.hasOwnProperty.call(textInputMap, margin || "none")
    ? textInputMap[margin || "none"]
    : textInputMap.undefined;
};

const buttonMap: MapOptions = {
  primaryLarge: theme.styleButton.buttonPrimaryLarge,
  primaryMedium: theme.styleButton.buttonPrimaryMedium,
  primarySmall: theme.styleButton.buttonPrimarySmall,
  secundaryLarge: theme.styleButton.buttonSecundaryLarge,
  secundaryMedium: theme.styleButton.buttonSecundaryMedium,
  secundarySmall: theme.styleButton.buttonSecundarySmall,
  secundaryQuarck: theme.styleButton.secundaryQuarck,
  primaryLargeCherry: theme.styleButton.primaryLargeCherry,
  secondaryLargeCherry: theme.styleButton.secundaryLargeCherry,
  ghostLarge: theme.styleButton.ghostLarge,
  ghostMedium: theme.styleButton.ghostMedium,
  ghostSmall: theme.styleButton.ghostSmall,
  quarckIcon: theme.styleButton.quarckIcon,
  blocked: theme.styleButton.blocked,
  tiny: theme.styleButton.tiny,
  firstPersonalizeQuickAccess: undefined,
  secondPersonalizeQuickAccess: undefined,
  undefined: theme.styleButton.buttonPrimaryLarge,
};

export const buttonOptions = (button?: string) => {
  return Object.hasOwnProperty.call(buttonMap, button || "none")
    ? buttonMap[button || "none"]
    : buttonMap.undefined;
};

export const colorsMap = (
  token: PropsTokenColorsCore,
  colors: PropsColorsCore
) => {
  const data: MapOptions = {
    PRYMARY_BASE_01: colors.PRYMARY_BASE_01,
    PRYMARY_BASE_02: colors.PRYMARY_BASE_02,
    SECONDARY_BASE_01: colors.SECONDARY_BASE_01,
    SECONDARY_BASE_02: colors.SECONDARY_BASE_02,
    SECONDARY_BASE_03: colors.SECONDARY_BASE_03,
    SECONDARY_BASE_04: colors.SECONDARY_BASE_04,
    SECONDARY_BASE_05: colors.SECONDARY_BASE_05,
    SECONDARY_BASE_06: colors.SECONDARY_BASE_06,
    LIGHT_BASE_01: colors.LIGHT_BASE_01,
    LIGHT_BASE_02: colors.LIGHT_BASE_02,
    LIGHT_BASE_03: colors.LIGHT_BASE_03,
    LIGHT_BASE_04: colors.LIGHT_BASE_04,
    LIGHT_BASE_05: colors.LIGHT_BASE_05,
    DARK_BASE_01: colors.DARK_BASE_01,
    DARK_BASE_02: colors.DARK_BASE_02,
    DARK_BASE_03: colors.DARK_BASE_03,
    DARK_BASE_04: colors.DARK_BASE_04,
    DARK_BASE_05: colors.DARK_BASE_05,
    SUCCESS_BASE_01: colors.SUCCESS_BASE_01,
    SUCCESS_BASE_02: colors.SUCCESS_BASE_02,
    SUCCESS_BASE_03: colors.SUCCESS_BASE_03,
    SUCCESS_BASE_04: colors.SUCCESS_BASE_04,
    SUCCESS_BASE_05: colors.SUCCESS_BASE_05,
    SUCCESS_BASE_06: colors.SUCCESS_BASE_06,
    ERROR_BASE_01: colors.ERROR_BASE_01,
    ERROR_BASE_02: colors.ERROR_BASE_02,
    ERROR_BASE_03: colors.ERROR_BASE_03,
    ERROR_BASE_04: colors.ERROR_BASE_04,
    ERROR_BASE_05: colors.ERROR_BASE_05,
    ALERT_COLOR_01: colors.ALERT_COLOR_01,
    ALERT_COLOR_02: colors.ALERT_COLOR_02,
    ALERT_COLOR_03: colors.ALERT_COLOR_03,
    ALERT_COLOR_04: colors.ALERT_COLOR_04,
    ALERT_COLOR_05: colors.ALERT_COLOR_05,
    HIGHLIGHT_COLOR_01: colors.HIGHLIGHT_COLOR_01,
    HIGHLIGHT_COLOR_02: colors.HIGHLIGHT_COLOR_02,
    HIGHLIGHT_COLOR_03: colors.HIGHLIGHT_COLOR_03,
    HIGHLIGHT_COLOR_04: colors.HIGHLIGHT_COLOR_04,
    HIGHLIGHT_COLOR_05: colors.HIGHLIGHT_COLOR_05,
    SAFE_COLOR_01: colors.SAFE_COLOR_01,
    SAFE_COLOR_02: colors.SAFE_COLOR_02,
    SAFE_COLOR_03: colors.SAFE_COLOR_03,
    SAFE_COLOR_04: colors.SAFE_COLOR_04,
    transparent: "transparent",
    undefined: colors.PRYMARY_BASE_01,
  };

  return Object.hasOwnProperty.call(data, token) ? data[token] : data.undefined;
};

const textMap: MapOptions = {
  headingXXXLR: theme?.styleText?.heading?.xxxlr,
  headingXXXLM: theme?.styleText?.heading.xxxlm,
  headingXXXL: theme?.styleText?.heading.xxxl,
  headingXXL: theme?.styleText?.heading.xxl,
  headingMD: theme?.styleText?.heading.md,
  headingMDL: theme?.styleText?.heading.mdl,
  subtitleXXLB: theme?.styleText.subtitle?.xxlb,
  subtitleXXXXL: theme?.styleText?.subtitle?.xxxxl,
  subtitleXXXL: theme?.styleText?.subtitle?.xxxl,
  subtitleXXL: theme?.styleText?.subtitle?.xxl,
  subtitleXL: theme?.styleText?.subtitle?.xl,
  subtitleX: theme?.styleText?.subtitle?.x,
  subtitleLG: theme?.styleText?.subtitle?.lg,
  subtitleMDM: theme?.styleText?.subtitle?.mdm,
  subtitleMD: theme?.styleText?.subtitle?.md,
  paragraphXXXXL: theme?.styleText?.paragraph?.xxxxl,
  paragraphXXXL: theme?.styleText?.paragraph?.xxxl,
  paragraphXXL: theme?.styleText?.paragraph?.xxl,
  paragraphXXLL: theme?.styleText?.paragraph?.xxll,
  paragraphXL: theme?.styleText?.paragraph?.xl,
  paragraphLG: theme?.styleText?.paragraph?.lg,
  paragraphL: theme?.styleText?.paragraph?.l,
  paragraphMDM: theme?.styleText?.paragraph?.mdm,
  paragraphMD: theme?.styleText?.paragraph?.md,
  paragraphMDL: theme?.styleText?.paragraph?.mdl,
  paragraphSML: theme?.styleText?.paragraph?.sml,
  paragraphSM: theme?.styleText?.paragraph?.sm,
  paragraphXS: theme?.styleText?.paragraph?.xs,
  paragraphXXS: theme?.styleText?.paragraph?.xxs,
  paragraphXXXS: theme?.styleText?.paragraph?.xxxs,
  paragraphXXXXS: theme?.styleText?.paragraph?.xxxxs,
  linkXL: theme?.styleText?.link?.xl,
  linkLG: theme?.styleText?.link?.lg,
  linkXS: theme?.styleText?.link?.xs,
  linkSM: theme?.styleText?.link?.sm,
  undefined: theme?.styleText?.paragraph?.mdm,
};

export const textOptions = (type?: string) => {
  return Object.hasOwnProperty.call(textMap, type || "none")
    ? textMap[type || "none"]
    : textMap.undefined;
};

const backgroundMap: MapOptions = {
  default: theme.styleBackground.default,
  scrim: theme.styleBackground.scrim,
  secundary: theme.styleBackground.secundary,
  undefined: theme.styleBackground.default,
};

export const backgroundOptions = (background?: string) => {
  return Object.hasOwnProperty.call(backgroundMap, background || "none")
    ? backgroundMap[background || "none"]
    : backgroundMap.undefined;
};

const paddingMap: MapOptions = {
  innerSmall: theme.spaces.padding.inner.small,
  innerMiddle: theme.spaces.padding.inner.middle,
  innerMedium: theme.spaces.padding.inner.medium,
  innerLarge: theme.spaces.padding.inner.large,
  innerGreat: theme.spaces.padding.inner.great,
  innerLarger: theme.spaces.padding.inner.larger,
  innerXl: theme.spaces.padding.inner.xl,
  innerXxxl: theme.spaces.padding.inner.xxxl,
  squishXxxss: theme.spaces.padding.squish.xxxss,
  squishXxxs: theme.spaces.padding.squish.xxxs,
  squishXxs: theme.spaces.padding.squish.xxs,
  squishXs: theme.spaces.padding.squish.xs,
  squishQuarck: theme.spaces.padding.squish.quarck,
  squishSmaller: theme.spaces.padding.squish.smaller,
  squishSmall: theme.spaces.padding.squish.small,
  squishShort: theme.spaces.padding.squish.short,
  squishMiddle: theme.spaces.padding.squish.middle,
  squishMinor: theme.spaces.padding.squish.minor,
  squishMedium: theme.spaces.padding.squish.medium,
  squishLarge: theme.spaces.padding.squish.large,
  stretchSmall: theme.spaces.padding.stretch.small,
  stretchMiddle: theme.spaces.padding.stretch.middle,
  stretchHalf: theme.spaces.padding.stretch.half,
  stretchMedium: theme.spaces.padding.stretch.medium,
  stretchLarge: theme.spaces.padding.stretch.large,
  stretchLarger: theme.spaces.padding.stretch.larger,
  undefined: `${0}px ${0}px`,
};

export const transformPaddingMargin = (padding?: string) => {
  return Object.hasOwnProperty.call(paddingMap, padding || "none")
    ? paddingMap[padding || "none"]
    : paddingMap.undefined;
};

const borderRadiusMap: MapOptions = {
  none: theme.borderRadius.none,
  smaller: theme.borderRadius.smaller,
  small: theme.borderRadius.small,
  medium: theme.borderRadius.medium,
  large: theme.borderRadius.large,
  big: theme.borderRadius.big,
  larger: theme.borderRadius.larger,
  pill: theme.borderRadius.pill,
  circle: theme.borderRadius.circle,
  undefined: theme.borderRadius.none,
};

export const transformBorderRadius = (borderRadius?: string) => {
  return Object.hasOwnProperty.call(borderRadiusMap, borderRadius || "none")
    ? borderRadiusMap[borderRadius || "none"]
    : borderRadiusMap.undefined;
};

const borderWidthMap: MapOptions = {
  none: theme.borderWidth.none,
  smaller: theme.borderWidth.smaller,
  small: theme.borderWidth.small,
  medium: theme.borderWidth.medium,
  half: theme.borderWidth.half,
  large: theme.borderWidth.large,
  xxl: theme.borderWidth.xxl,
  undefined: theme.borderWidth.none,
};

export const transformBorderWidth = (borderWidth?: PropsBorderWidth) => {
  return Object.hasOwnProperty.call(borderWidthMap, borderWidth || "none")
    ? borderWidthMap[borderWidth || "none"]
    : borderWidthMap.undefined;
};

const shadowMap: MapOptions = {
  level1: theme.shadow.level1,
  level2: theme.shadow.level2,
  level3: theme.shadow.level3,
  level4: theme.shadow.level4,
  level5: theme.shadow.level5,
  none: theme.shadow.level0,
  undefined: theme.shadow.level1,
};

export const shadowOptions = (type?: PropsShadowTokens) => {
  return Object.hasOwnProperty.call(shadowMap, type || "none")
    ? shadowMap[type || "none"]
    : shadowMap.undefined;
};

const iconSizeMap: MapOptions = {
  xl: theme.styleIcon.xl,
  lg: theme.styleIcon.lg,
  gt: theme.styleIcon.gt,
  md: theme.styleIcon.md,
  sm: theme.styleIcon.sm,
  xs: theme.styleIcon.xs,
  sx: theme.styleIcon.sx,
  xxs: theme.styleIcon.xxs,
  xxxs: theme.styleIcon.xxxs,
  undefined: theme.styleIcon.xs,
};

export const iconSizeOptions = (type?: PropsSizeIconCore) => {
  return Object.hasOwnProperty.call(iconSizeMap, type || "none")
    ? iconSizeMap[type || "none"]
    : iconSizeMap.undefined;
};
