import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const isActive = (pathname) => router.pathname === pathname

  const left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive('/')}>
          Feed
        </a>
      </Link>
      <Link href="/drafts">
        <a data-active={isActive('/drafts')}>Drafts</a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: gray;
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: #000;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  )

  const right = null

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  )
}

export default Header
