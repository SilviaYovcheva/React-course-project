import { Link } from "react-router";
import BookImg1 from './bookimg1.jpg'
import BookImg2 from './bookimg2.jpg'
import BookImg3 from './bookimg3.jpg'
import styles from "./home.styles.module.css";

export default function Home() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.hero}>
        <div className={styles.heroTextBox}>
          <h1 className={styles.heroTextPrimary}>
            You’re Only One Book Away From a Good Mood
          </h1>

          <p className={styles.heroDescription}>
            A considered collection of fiction, essays, poetry, and field notes
            for readers who still believe a book can alter the weather of a
            room.
          </p>

          <Link to="/books" className="btn btn--full margin-right-sm">
            Discover Now
          </Link>

        </div>

        <div className={styles.heroImgBox}>
          
            <img
              src={BookImg1}
              alt="Photo 1"
              className={`${styles.photo} ${styles.photoP1}`}
            />

            <img
              src={BookImg2}
              alt="Photo 2"
              className={`${styles.photo} ${styles.photoP2}`}
            />

            <img
              src={BookImg3}
              alt="Photo 3"
              className={`${styles.photo} ${styles.photoP3}`}
            />
          </div>

      </div>
    </section>
  );
}
