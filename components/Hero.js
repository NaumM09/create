import styles from "../styles/Home.module.css";
import mock4 from "./imgs/lashes.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className={styles.Herocontainer}>
      <div className={styles.HeroWrap}>
        <div className={styles.HeroRow}>
          <div className={styles.column1}>
            <div className={styles.HeroText}>
              <h4 className={styles.topline}>Beauty but luxury</h4>
              <h2 className={styles.heading}>Lorem ipsum eiusmod</h2>
              <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="BtnWrap">
                <button className={styles.Herobutton}>Get Ready With Us</button>
              </div>
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.HeroImg}>
              {/* <Image src={mock4} alt="mock-image" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
