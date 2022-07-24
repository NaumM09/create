import { Data } from "./data";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const HomeGallery = () => {
  return (
    <>
      <section className={styles.display}>
        <div className={styles.serviceheader}>
          <h3>Our Services</h3>
        </div>
        <div className={styles.content}>
          {Data.map((value) => {
            return (
              <>
                <div className={styles.box}>
                  <div className={styles.galleryimgs}>
                    <Image src={value.cover} alt={""} />
                  </div>
                  <div className={styles.overlay}>
                    <div className={styles.text}>
                      <h2>{value.title}</h2>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
