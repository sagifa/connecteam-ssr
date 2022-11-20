import {
  BoxProps,
  FlexProps,
  ImgProps,
  InputProps,
  SquareProps,
  TextProps,
} from "@chakra-ui/react";
import { MainContainerStyle } from "../../styles/style";
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
  w: "71.5rem",
};

export const PrimaryPageStyle: FlexProps = {
  px: "18vw",
  bgColor: "white",
  mx: "2.3em",
  pt: "2rem",
  h: "31rem",
};

export const PrimarySectionContentStyle: FlexProps = {
  className: "left-side",
  direction: "column",
  justifyContent: "center",
  w: "43.5rem",
  px: "2rem",
};

export const PrimaryLabelStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "12px",
  letterSpacing: "0.19em",
  textTransform: "uppercase",
  color: { DEFAULT_FONT_COLOR },
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
  h: "46rem",
  pt: "3rem",
  px: APP_PADDING,
  alignItems: "center",
  direction: "column",
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

export const SecondaryIconBg: SquareProps = {
  rounded: "full",
  size: "7.5rem",
  mt: "4rem",
};
