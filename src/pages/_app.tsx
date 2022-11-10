import "styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Header from "components/organisms/Header";
import { Provider } from "react-redux";
import { store } from "store/inidex";
import styled from "@emotion/styled";

const SBox = styled(Box)`
background-color: #ECEBE5;
height: 100vh;
`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <SBox>
          <Header />
          <Container mt="-5">
            <Component {...pageProps} />
          </Container>
        </SBox>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
