import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">AzerilaFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noreferrer">
          Ametyst Group
        </a>
        Azerila | AzerilaFood Project &copy;
      </footer>
    </>
  );
}

export default Layout;
