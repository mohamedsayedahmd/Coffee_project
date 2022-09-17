import styles from "./style.module.css";

export default function Header() {
  console.log("Header rendered");
  return (
    <div className={styles.up}>
      <center>
        <div>Welcome to Coffee Shop</div>

        <img
          className="img-fluid"
          src="https://coffeeaffection.com/wp-content/uploads/2020/07/divider-1-e1596752823387.webp"
          alt="MDN logo"
        />
      </center>
    </div>
  );
}
