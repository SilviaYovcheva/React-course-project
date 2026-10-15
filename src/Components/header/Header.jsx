import { Link } from "react-router";
import Logo from './book.png'
import styles from "./header.styles.module.css";

export default function Header() {
  return (
    <section className={styles.headerNav}>
      <header className={styles.header}>
        <Link to="/">
          <img
            src={Logo}
            alt="BookNest logo"
            className={styles.logo}
          />
        </Link>

        <nav className={styles.mainNav}>
          <ul className={styles.mainNavList}>
            <li>
              <Link className={styles.mainNavLink} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to="/books">
                All Books
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.mainNavLink} ${styles.navCta}`}
                to="#cta"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        <button className={styles.btnMobileNav}>
          <ion-icon className={styles.iconMobileNav} name="menu-outline" />
          <ion-icon className={styles.iconMobileNav} name="close-outline" />
        </button>
      </header>
    </section>
  );
}
