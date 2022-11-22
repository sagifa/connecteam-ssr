import { ChakraProps, extendTheme, FlexProps } from "@chakra-ui/react";
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

export const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "1920",
    xl: "2560",
    "2xl": "3200",
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.81) translateY(-24px)",
                color: "#FF9900",
                backgroundColor: "#FBFBFB",
                clipPath: "content-box",
              },
            },

            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                transform: "scale(0.81) translateY(-24px)",
              },

            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              pointerEvents: "none",
              mx: "1.5rem",
              px: "1",
              my: 3,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});
