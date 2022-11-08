import "styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Header from "components/organisms/Header";
import theme from "theme/theme";
import { Provider } from "react-redux";
import { store } from "store/inidex";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Header />
        <Container mt={4}>
          <Component {...pageProps} />
        </Container>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
