import Head from 'next/head'

import Layout from '../components/layout'
import AdminHeader from '../components/admin/header'
import AdminAuth from '../components/admin/auth'

export default function AdminPage() {
  return (
    <Layout>
      <Head>
        <title>BangBakery Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdminHeader />
      <AdminAuth />
    </Layout>
  )
}
