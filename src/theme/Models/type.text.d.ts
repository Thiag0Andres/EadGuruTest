export interface PropsTextCore {
  heading: {
    xxxlr: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
    };
    xxxlm?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
    };
    xxxl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
    };
    xxl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
    };
    md?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
    };
    mdl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      lineHeight?: number;
    };
  };
  subtitle?: {
    xxlb?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxxxl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxxl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    x?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    lg?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    mdm?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    md?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
  };
  paragraph?: {
    xxxxl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxxl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxll?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    lg?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    l?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    mdm?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    md?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    mdl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    sml?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    sm?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xs?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxs?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxxs?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xxxxs?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
  };
  link?: {
    xl?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    lg?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
    };
    xs?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
      textDecoration?: "underline";
    };
    sm?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
      textDecoration?: "underline";
    };
    mdm?: {
      font?: string;
      fontSize?: number;
      fontWeight?: number;
      letterSpacing?: number;
      lineHeight?: number;
      textDecoration?: "underline";
    };
  };
}

export type PropsTokensTextCore =
  | "headingXXXLR"
  | "headingXXXLM"
  | "headingXXXL"
  | "headingXXL"
  | "headingMD"
  | "headingMDL"
  | "subtitleXXLB"
  | "subtitleXXXXL"
  | "subtitleXXXL"
  | "subtitleXXL"
  | "subtitleXL"
  | "subtitleX"
  | "subtitleLG"
  | "subtitleMDM"
  | "subtitleMD"
  | "paragraphXXXL"
  | "paragraphXXXXL"
  | "paragraphXXL"
  | "paragraphXXLL"
  | "paragraphXL"
  | "paragraphLG"
  | "paragraphL"
  | "paragraphMDM"
  | "paragraphMD"
  | "paragraphMDL"
  | "paragraphSML"
  | "paragraphSM"
  | "paragraphXS"
  | "paragraphXXS"
  | "paragraphXXXS"
  | "paragraphXXXXS"
  | "linkXL"
  | "linkLG"
  | "linkXS"
  | "linkSM"
  | "linkMDM";

export interface PropsTextDefault extends PropsTextCore {}
