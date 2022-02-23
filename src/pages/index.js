import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>welcome</h1>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Search Github users" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
