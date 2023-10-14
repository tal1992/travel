import "../../styles/main.css";
import "../../styles/custom.css";
import React from "react";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://www.googletagmanager.com/gtag/js?id=G-VP8T876JDG"
          rel="preload"
          as="script"
        />
      </Head>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="/google-analytics.js"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
