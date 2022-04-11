/* eslint-disable react/no-unknown-property */
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@200;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-black text-white h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
