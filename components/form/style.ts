import { TextProps } from "@chakra-ui/react";
import { DEFAULT_FONT_COLOR } from "../../utils/consts";

export const FormTitleStyle: TextProps = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "19px",
  lineHeight: "23px",
  color: "#6A6A6A",
};

export const FormIntroTitleStyle: TextProps = {
  fontFamily: "Merriweather",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "32px",
  lineHeight: "32px",
  color: "#FF9900",
};

export const RadioButtonTitleStyle: TextProps = {
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "1rem",
  color: "#242424",
  mt: "1.5rem",
};

export const RadioButtonOptionStyle: TextProps = {
  fontFamily: "Inter",
  fontWeight: "700",
  fontSize: "1rem",
  lineHeight: "1rem",
  color: DEFAULT_FONT_COLOR,
  textAlign: "center",
};
