import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>My Spotify</title>
          <meta name='author' content='LeNiglo <lefrantguillaume@gmail.com' />
          <meta name='description' content='Spotify-like application build in NextJS' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
