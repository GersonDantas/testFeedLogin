import React, { useContext } from "react";
import Footer from "@components/footer";
import type { AppProps } from "next/app";
import Head from "next/head";
import Reset from "../styles/reset";
import { Context, ContextProvider } from "../utils/Context/Contex";
import Header from "@components/header";

function MyApp({ Component, pageProps }: AppProps) {
  const { iUserInput } = useContext(Context);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Test</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/*eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ContextProvider>
        <Reset />
        {
          Component.name === "Feed" && (
            <Header />
          ) /*se for o Login, esconde o header*/
        }
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </>
  );
}
export default MyApp;
