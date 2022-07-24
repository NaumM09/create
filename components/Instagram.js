import React, { useRef } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "../styles/Home.module.css";
import { images } from "./images";

const imagess = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
];

export const Instagram = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 3000;
    } else {
      current.scrollleft += 300;
    }
  };
  return (
    <div className={styles.app__gallery}>
      <div className={styles.app__gallery_content}>
        <h3 className={styles.title}>Instagram</h3>
        <h2 className={styles.headtext__cormorant}>Photo Gallery</h2>
        <p
          className={styles.p___opensans}
          style={{ color: "#fff", marginTop: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button type="button" className={styles.custom__button}>
          View More
        </button>
      </div>
      <div className={styles.app__gallery_images}>
        <div className={styles.app__gallery_images_container} ref={scrollRef}>
          {imagess.map((images, index) => (
            <div
              className={styles.app__gallery_images_card}
              key={`gallery_image-${index + 1}`}
            >
              <img src={images} alt="gallery-image" />
              <div className={styles.gallery__image_icon}>
                <InstagramIcon />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.app__gallery_images_arrow}>
          <div className={styles.gallery__arrow_icon}>
            <ChevronLeftIcon onClick={() => scroll("left")} />
          </div>
          <div className={styles.gallery__arrow_icon}>
            <ChevronRightIcon onClick={() => scroll("left")} />
          </div>
        </div>
      </div>
    </div>
  );
};
