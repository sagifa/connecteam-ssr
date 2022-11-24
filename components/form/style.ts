import {
  BoxProps,
  FlexOptions,
  FlexProps,
  FormLabelProps,
  TextProps,
} from "@chakra-ui/react";
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

export const PlaceholderStyle: FormLabelProps = {
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "1.4rem",
  color: "#242424",
  alignContent: "center",
  justifyContent: "center",
};

export const PageMobilStyle: FlexProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px 0px",
  gap: "40px",
  pt: "2rem",
  bgColor: "#F8F8F8",

  // px: "1rem",
};

export const PageStyle: FlexProps = {
  id: "form-section",
  mt: "4rem",
  py: "4rem",
  h: "41.5rem",
  bgColor: "#F8F8F8",
  justifyContent: "center",
  w: "100%",
};

export const ContainerMobileStyle: FlexProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px 24px",
  gap: "40px",
};

export const InfoBoxStyle: FlexProps = {
  className: "left-side",
  w: "25.25rem",
  gap: "2rem",
  direction: "column",
  mr: "2.5rem",
};

export const InfoBoxMobileStyle: FlexProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  w: "352px",
};

export const SeparatorMobileStyle: BoxProps = {
  width: "352px",
  height: "2px",
  background: "rgba(0, 0, 0, 0.08)",
  borderRadius: "38px",
};

export const FormFieldsBoxStyle: FlexProps = {
  className: "right-side",
  w: "43.75rem",
  justifyContent: "space-between",
  direction: "column",
};

export const FormFieldsBoxMobileStyle: FlexProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px",
  gap: "18px",
  width: "352px",
  // height: "844px",
};
