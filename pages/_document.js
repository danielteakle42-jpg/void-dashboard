import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth">
      <Head>
        {/* 🔥 optional performance boost */}
        <meta charSet="utf-8" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}