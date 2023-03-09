import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Navbar() {
    const router = useRouter();
    console.log(router);
  return (
    <nav>
        <Link style={{color:router.pathname==="/"?"red":"blue"}} href="/">
        HOME
        </Link>
        <Link style={{color:router.pathname==="/about"?"red":"blue"}} href="/about">
        ABOUT
        </Link>
    </nav>
  )
}
