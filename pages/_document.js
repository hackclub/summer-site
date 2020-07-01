import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as snippet from '@segment/snippet'

const {
  ANALYTICS_WRITE_KEY = 'wRi41ypHhzfZm3pdbyXFq7PTpZ7fhORD',
  NODE_ENV = 'development'
} = process.env

const renderSnippet = () => {
  const opts = { apiKey: ANALYTICS_WRITE_KEY, page: true }
  return NODE_ENV === 'production' ? snippet.min(opts) : ''
}

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `html { scroll-behavior: smooth; }`
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&family=Shrikhand&display=swap"
            rel="stylesheet"
          />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
        </body>
      </Html>
    )
  }
}
