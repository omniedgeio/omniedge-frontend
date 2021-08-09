import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import DocLayout from "../components/layout/Doc";
import theme from "../lib/theme";
import "../styles/globals.css";
import { Page } from "../types";
type AppWithLayoutProps = {
  Component: Page;
} & AppProps;

function App({ Component, pageProps }: AppWithLayoutProps) {
  let Layout = Component?.isMDXComponent
    ? DocLayout // Doc page
    : Component.layout || (({ children }) => <>{children}</>); // Non-doc page

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
export default App;
