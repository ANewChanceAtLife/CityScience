import { AppProps } from "next/app";
import Head from "next/head";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>City Science Demo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
