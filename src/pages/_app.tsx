import "../../styles/main.css";
import "../../styles/custom.css";
import React from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VP8T876JDG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VP8T876JDG');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
