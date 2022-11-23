import {
  BoxProps,
  FlexProps,
  ImgProps,
  SquareProps,
  TextProps,
} from "@chakra-ui/react";
import { APP_PADDING, DEFAULT_FONT_COLOR } from "../../utils/consts";

export const LabelSecondaryStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "12px",
  letterSpacing: "0.19em",
  textTransform: "uppercase",
  color: "#9CB8C4",
  mt: "1rem",
};

export const TitleSecondaryStyle: TextProps = {
  fontFamily: "Merriweather",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "42px",
  lineHeight: "42px",
  mt: "0.25rem",
};

export const SeparateSecondaryStyle: BoxProps = {
  height: "2px",
  mt: "2rem",
  background: "rgba(255, 255, 255, 0.08)",
  borderRadius: "38px",
};

export const PrimaryPageStyle: FlexProps = {
  bgColor: "white",
  mx: "2.3em",
  pt: "2rem",
  h: "31rem",
  px: APP_PADDING,
};

export const PrimaryPageMobileStyle: FlexProps = {
  bgColor: "white",
  w: "25rem",
};

export const PrimarySectionContentStyle: FlexProps = {
  className: "text-content",
  direction: "column",
  justifyContent: "center",
  w: "43.5rem",
  px: "2rem",
};

export const PrimarySectionContentMobileStyle: FlexProps = {
  className: "text-content",
  direction: "column",
  justifyContent: "center",
  py: "1rem",
  gap: "18px",
};

export const PrimaryLabelStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "12px",
  letterSpacing: "0.19em",
  textTransform: "uppercase",
  color: DEFAULT_FONT_COLOR,
};

export const PrimaryTitleStyle: TextProps = {
  fontFamily: "Merriweather",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "32px",
  lineHeight: "32px",
};

export const PrimaryIconStyle: FlexProps = {
  borderRadius: "full",
  w: "3.75rem",
  h: "3.75rem",
  justify: "center",
  alignItems: "center",
  mr: "1rem",
};

export const SecondaryPageStyle: FlexProps = {
  position: "relative",
  overflow: "hidden",
  mt: "4rem",
  alignItems: "center",
  direction: "column",
  pb: "4rem",
  px: APP_PADDING,
};

export const SecondaryPageMobileStyle: FlexProps = {
  position: "relative",
  overflow: "hidden",
  mt: "1rem",
  pt: "1rem",
  alignItems: "flex-start",
  direction: "column",
  h: "64.5rem",
};

export const SecondaryImgStyle: ImgProps = {
  alt: "bg",
  position: "absolute",
  rounded: "full",
  right: "-14rem",
  top: "-1rem",
  opacity: "0.05",
  h: "50rem",
  sx: {
    filter: "grayscale(90%)",
  },
};

export const SecondaryImgMobileStyle: ImgProps = {
  alt: "bg",
  position: "absolute",
  // right: "-14rem",
  // top: "-1rem",
  opacity: "0.15",
  h: "64.5rem",
  sx: {
    filter: "grayscale(90%)",
  },
};

export const SecondaryIconBg: SquareProps = {
  rounded: "full",
  size: "7.5rem",
  mt: "4rem",
};

export const SecondaryIconMobileBg: SquareProps = {
  rounded: "full",
  size: "6rem",
};
