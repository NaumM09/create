import styles from "../styles/Home.module.css";

const Promotion = () => {
  return (
    <div className={styles.Promotion__container}>
      <div className={styles.Promotion__wrap}>
        <div className={styles.Promotion__row}>
          <div className={styles.Promotion__column1}>
            <div className={styles.Promotion__text}>
              <h4 className={styles.Promotion__topline}>Lash Tips</h4>
              <h2 className={styles.Promotion__heading}>
                Make your lashes last longer
              </h2>
              <p className={styles.Promotion__subtitle}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Promotion__column2}>
        <div className={styles.Promotion__Img}>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
