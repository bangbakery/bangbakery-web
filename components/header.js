import NextLink from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src="/icons/menu.svg" alt="menu" />
      </div>
      <div>
        <NextLink href="/">
          <a>
            <img src="/logos/logo-white.svg" alt="Bang Bakery" />
          </a>
        </NextLink>
      </div>
      <div>
        <img src="/icons/cart.svg" alt="cart" />
      </div>
    </header>
  )
}
