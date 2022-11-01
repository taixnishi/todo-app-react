import "styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {Container} from "@chakra-ui/react";
import Header from "components/organisms/Header";
import theme from 'theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <Header />
      <Container mt={4} >
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
