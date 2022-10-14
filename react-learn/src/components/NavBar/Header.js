import styles from "./../style.module.css";
import { header_pic } from "./../../images/types";
import { Link } from "react-router-dom";

export default function Header() {
  console.log("Header rendered");
  return (
    <div className={styles.up}>
      <span>
        <Link
          className="navbar-brand mx-1 border-dark border-bottom"
          to="/Login"
        >
          Login
        </Link>
        <Link
          className="navbar-brand mx-1 border-dark border-bottom"
          to="/Register"
        >
          Register
        </Link>
      </span>
      <center>
        <div>Welcome to Coffee Shop</div>
        <img className="img-fluid" src={header_pic} alt="MDN logo" />
      </center>
    </div>
  );
}
