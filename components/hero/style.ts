import { FlexProps, SquareProps, TextProps } from "@chakra-ui/react";
import { DEFAULT_FONT_COLOR } from "../../utils/consts";

export const TitleStyle: TextProps = {
  fontWeight: "700",
  fontSize: ["42px", "64px"],
  lineHeight: "106%",
  color: "rgba(255, 255, 255, 1)",
  fontFamily: "Merriweather",
};

export const SubtitleStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "19px",
  lineHeight: "23px",
  color: "rgba(255, 255, 255, 1)",
  mt: "2rem",
};

export const ButtonsBoxStyle: FlexProps = {
  mt: "2rem",
  gap: "1rem",
};

export const ScrollButtonStyle: SquareProps = {
  mt: "8rem",
  size: "2.6rem",
  cursor: "pointer",
  bgColor: "rgba(255, 255, 255, 0.01)",
  backdropFilter: "blur(8px)",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
};
