import { ButtonProps, TextProps } from "@chakra-ui/react";

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

export const ButtonContentStyle: TextProps = {
  color: "white",
  fontFamily: "Merriweather",
  fontSize: "19px",
  fontWeight: "700",
  fontStyle: "normal",
  lineHeight: "19px",
};

export const SecondaryButtonLinkStyle: ButtonProps = {
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
