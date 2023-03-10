import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Navbar.module.css';

export default function Navbar() {
    const router = useRouter();
    console.log(router);
  return (
    <nav className={styles.nav}>
      
        <Link className={[styles.link, router.pathname==='/'?styles.active:''].join(' ')} href="/">
        HOME
        </Link>
        <Link className={[styles.link, router.pathname==='/about'?styles.active:''].join(' ')} href="/about">
        ABOUT
        </Link>
    </nav>
  )
}
