import Head from 'next/head'

import Header from '../components/header'

export default function OrderPage() {
  return (
    <div>
      <Head>
        <title>Order breads from BangBakery</title>
      </Head>

      <Header />

      <h1>Let's order some bread</h1>
    </div>
  )
}
