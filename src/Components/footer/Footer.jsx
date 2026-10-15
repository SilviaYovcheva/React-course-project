import { Link } from "react-router";
import styles from './footer.styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.logoCol}>
          <p className={styles.copyright}>
            Copyright &copy; <span className={styles.year}>2027</span> by
            BookNest. All rights reserved.
          </p>
        </div>
    </footer>
  );
}
