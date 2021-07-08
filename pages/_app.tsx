import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../lib/theme";
import { Page } from "../types";
type AppWithLayoutProps = {
  Component: Page;
} & AppProps;

function App({ Component, pageProps }: AppWithLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>OmniEdge</title>
        <meta name="description" content="Connect without concern" />
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </ChakraProvider>
  );
}
export default App;
