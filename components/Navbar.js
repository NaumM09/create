import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Navbar = () => (
  <div className={styles.Nav}>
    <div className={styles.NavContainer}>
      <div className={styles.NavLogo}>
        <h4 className={styles.LogoName}>Phils Creations</h4>
      </div>

      <ul className={styles.NavMenu}>
        <div className={styles.navItem}>
          <Link href="/services">
            <li className={styles.navlinks}>Services</li>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="gallery">
            <li className={styles.navlinks}>Gallery</li>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="shop-products">
            <li className={styles.navlinks}>Shop Products</li>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="our-story">
            <li className={styles.navlinks}>Our Story</li>
          </Link>
        </div>
        <Link href="https://philscreations2473.setmore.com/">
          <button className={styles.navButton} type="button">
            Book Now
          </button>
        </Link>
      </ul>
    </div>
  </div>
);
