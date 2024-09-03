import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from Gabriel Palhares' personal gallery."
          />
          <meta property="og:site_name" content="m-emoria.vercel.app" />
          <meta
            property="og:description"
            content="See pictures from Gabriel Palhares' personal gallery."
          />
          <meta property="og:title" content="Gabriel Palhares' personal gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Gabriel Palhares' personal gallery" />
          <meta
            name="twitter:description"
            content="See pictures from Gabriel Palhares' personal gallery."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
