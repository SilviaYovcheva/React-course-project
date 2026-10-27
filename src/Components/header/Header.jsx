import { Link } from "react-router";
import Logo from "./book.png";
import styles from "./header.styles.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Header() {
  const authContext = useContext(AuthContext);

  return (
    <section className={styles.headerNav}>
      <header className={styles.header}>
        <Link to="/">
          <img src={Logo} alt="BookNest logo" className={styles.logo} />
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
            {!authContext.isAuthenticated && (
              <li>
                <Link className={styles.mainNavLink} to="/login">
                  Login
                </Link>
              </li>
            )}
            {!authContext.isAuthenticated && (
              <li>
                <Link className={styles.mainNavLink} to="/register">
                  Register
                </Link>
              </li>
            )}
            {authContext.isAuthenticated && (
              <li>
                <Link
                  className={`${styles.mainNavLink} ${styles.navCta}`}
                  to="/books/create"
                >
                  Create Book
                </Link>
              </li>
            )}
            {authContext.isAuthenticated && (
              <li>
                <Link className={`${styles.mainNavLink}`} to="/logout">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </section>
  );
}
