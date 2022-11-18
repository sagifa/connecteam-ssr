import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, theme as base } from "@chakra-ui/react";
import { Inter, Merriweather } from "@next/font/google";
const inter = Inter();

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    text: `'Inter', ${base.fonts?.body}`,
    body: `'Merriweather', ${base.fonts?.body}`,
    button: `'Merriweather', sans-serif`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
