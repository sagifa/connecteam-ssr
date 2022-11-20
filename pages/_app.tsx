import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  field: {
    bg: "blue",
    borderColor: "gray.300",
    _placeholder: {
      color: "red.500",
    },
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
              backgroundColor: "white",
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
