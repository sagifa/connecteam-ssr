import { BoxProps, ButtonProps, FlexProps, TextProps } from "@chakra-ui/react";

export const MainContainerStyle: FlexProps = {
  px: "24.2rem",
};

export const ContentBoxStyle: FlexProps = {
  w: "34.6rem",
  // w: "25vw",
};

export const TitleContentStyle: TextProps = {
  fontWeight: "700",
  fontSize: ["42px", "64px"],
  lineHeight: "106%",
  color: "rgba(255, 255, 255, 1)",
  fontFamily: "Merriweather",
  pt: "6.3rem",
};

export const LogoStyle: BoxProps = {
  pt: "4rem",
};

export const subtitleStyle: TextProps = {
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
  // justifyContent: "center",
  // alignItems: "center",
};

export const PrimaryButtonLinkStyle: ButtonProps = {
  // size: "md",
  // w: "13.5rem",
  h: "3.4rem",
  background: "#FF9900",
  boxShadow:
    "0px 3px 12px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.07)",
  borderRadius: "32px",
  _hover: { bg: "#ED8E00" },
};

export const SecondaryButtonLinkStyle: ButtonProps = {
  // size: "md",
  h: "3.4rem",
  fontFamily: "Merriweather",
  background: "rgba(255, 255, 255, 0.14)",
  border: "2px solid",
  boxShadow:
    "0px 3px 12px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.07)",
  backdropFilter: "blur(8px)",
  borderRadius: "32px",
  _hover: { background: "rgba(255, 255, 255, 0.14)" },
};

export const ButtonContentStyle: TextProps = {
  color: "white",
  fontFamily: "Merriweather",
  fontSize: "19px",
  fontWeight: "700",
  fontStyle: "normal",
  lineHeight: "19px",
};

export const MyStyle: BoxProps = {
  color: "white",
  fontFamily: "Merriweather",
  fontSize: "19px",
  fontWeight: "700",
  fontStyle: "normal",
  lineHeight: "19px",
  background: "#FF9900",
  boxShadow:
    "0px 3px 12px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.07)",
  borderRadius: "32px",
};
