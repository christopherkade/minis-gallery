import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Pictures of miniatures painted by Christopher"
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Pictures of miniatures painted by Christopher"
          />
          <meta
            property="og:title"
            content="Pictures of Christopher's miniatures"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Pictures of Christopher's miniatures"
          />
          <meta
            name="twitter:description"
            content="See pictures of miniatures painted over the years by Christopher"
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

export default MyDocument;
