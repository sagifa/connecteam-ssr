import {
  BoxProps,
  ButtonProps,
  ChakraProps,
  FlexProps,
  TextProps,
} from "@chakra-ui/react";
import { DEFAULT_FONT_COLOR } from "../utils/consts";

export const MainContainerStyle: FlexProps = {
  px: "24.2rem",
};

export const InterNormalStyle: ChakraProps = {
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "19px",
  lineHeight: "23px",
  color: DEFAULT_FONT_COLOR,
};
