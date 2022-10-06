import styles from "./../style.module.css";
import { header_pic } from "./../../images/types";
export default function Header() {
  console.log("Header rendered");
  return (
    <div className={styles.up}>
      <center>
        <div>Welcome to Coffee Shop</div>
        <img className="img-fluid" src={header_pic} alt="MDN logo" />
      </center>
    </div>
  );
}
