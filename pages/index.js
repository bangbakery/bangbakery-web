import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BangBakery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div id="hero" className="hero-home">
          <img src="/logos/logo.png" alt="Bang Bakery" />
          <h2 className="tagline">Naturally handmade with love.</h2>
          <Link href="/order">
            <a className="order button">Order Breads</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
