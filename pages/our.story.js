import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function OurStory() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Story Time</h1>
    </div>
  );
}
