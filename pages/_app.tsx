import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, theme as base } from "@chakra-ui/react";
import { Inter, Merriweather } from "@next/font/google";

const inter = Inter();

const theme = extendTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
