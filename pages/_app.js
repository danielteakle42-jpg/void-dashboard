import '../styles/globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VOID Portal</title>
        <meta name="description" content="VOID Creator Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
      </Head>

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}