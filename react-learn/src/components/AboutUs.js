import styles from "./style.module.css";
export default function AboutUs() {
  console.log("about us rendered");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div>
      <h1 className={styles.aboutUs}>
        Hi we are black shift <br /> we are so happy that you choose <br /> our
        service random number key
        <br />
      </h1>
      <span className={styles.about}>{randomColor}</span>
    </div>
  );
}
