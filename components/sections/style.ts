import { BoxProps, FlexProps, InputProps, TextProps } from "@chakra-ui/react";
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
};

export const DescriptionSecondaryStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "19px",
  lineHeight: "23px",
  textAlign: "center",
  color: "white",
  mt: "2rem",
};

export const ButtonTextSecondaryStyle: TextProps = {
  fontFamily: "Merriweather",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "19px",
  lineHeight: "19px",
};

export const SeparateSecondaryStyle: BoxProps = {
  width: "100%",
  height: "2px",
  mt: "2rem",
  background: "rgba(255, 255, 255, 0.08)",
  borderRadius: "38px",
};

export const FormTitleStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "19px",
  lineHeight: "23px",
  color: "#6A6A6A",
};

export const InputBoxStyle: InputProps = {
  // display: "flex",
  // flexDirection: "row",
  // alignItems: "center",
  padding: "16px 24px",
  isolation: "isolate", //TODO!! no need
  // width: "341px",
  // height: "48px",
  // background: "#FFFFFF",
  border: "1px solid #EAEAEA",
  borderRadius: "24px",
  // placeholder

  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "23px",
  color: "#6A6A6A",

  //   font-family: 'Inter';
  // font-style: normal;
  // font-weight: 600;
  // font-size: 16px;
  // line-height: 16px;
  // /* identical to box height, or 100% */

  // color: #242424;
};
