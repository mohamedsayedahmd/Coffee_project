import React from "react";
import styles from "./../style.module.css";
import { home_coffee, coffee_border } from "./../../images/types";
function Home() {
  return (
    <div className="container">
      <span className={styles.home}>
        {" "}
        <h1>This is a Home component</h1>
        <img
          className="img-fluid"
          height={80}
          width={80}
          src={home_coffee}
          alt="MDN logo"
        />
      </span>
      <img className="img-fluid" src={coffee_border} alt="MDN logo" />
      <div className={styles.list}>
        <ul>
          <li>Coffee is a kind of magic you can drink.</li>
          <li>
            To me, the smell of fresh-made coffee is one of the greatest
            inventions.
          </li>
          <li>I like coffee exceedingly…</li>
          <li>What goes best with a cup of coffee? Another cup.</li>
        </ul>
      </div>
      <img className="img-fluid" src={coffee_border} alt="MDN logo" />
    </div>
  );
}
export default React.memo(Home);
