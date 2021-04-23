import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BangBakery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <div>
          <img src="/icons/menu.svg" alt="menu"></img>
        </div>
        <div>
          <img src="/logos/logo-white.svg" alt="logo"></img>
        </div>
        <div>
          <img src="/icons/cart.svg" alt="cart"></img>
        </div>
      </header>
    </div>
  );
}
