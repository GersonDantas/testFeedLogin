import Footer from "@components/footer";
import type { AppProps } from "next/app";
import Head from "next/head";
import Reset from "../styles/reset";
import { ContextProvider } from "../utils/Context/Contex";

function MyApp({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </>
  );
}
export default MyApp;
