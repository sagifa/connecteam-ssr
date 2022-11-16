import { FlexProps, TextProps } from "@chakra-ui/react";
import { MainContainerStyle } from "../../styles/style";

export const ContainerStyle: FlexProps = {
  bgColor: "white",
  mt: "4rem",
  gap: "2rem",
};

export const LabelStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "12px",
  /* identical to box height, or 100% */

  letterSpacing: "0.19em",
  textTransform: "uppercase",

  color: "#6A6A6A",
};

export const TitleStyle: TextProps = {
  fontFamily: "Merriweather",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "32px",
  lineHeight: "32px",
};

export const DescriptionStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "19px",
  lineHeight: "23px",
  color: "#6A6A6A",
};
