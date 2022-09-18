import styles from "./style.module.css";
import { React, useCallback } from "react";
import axios from "axios";
export default function Card({
  isChecked,
  selectC,
  lsItem,
  setLs,
  ls,
  text,
  counter,
  setHistoryList,
  historyList,
}) {
  console.log("Card rendered");
  const deleteCard = useCallback(() => {
    console.log("my ID is ");
    console.log(lsItem._id);
    let tempList = historyList;
    tempList.push(lsItem);
    setHistoryList(tempList);
    setLs(ls.filter((item) => item.id !== lsItem.id));
    console.log("lsItem._id  : " + lsItem.id);
    console.log(lsItem);
    axios
      .delete("http://localhost:5000/s/" + lsItem._id)
      .then(() => console.log("deleted..."));
  }, [historyList, ls]);
  return (
    <div className="card" width={200}>
      <div className="card-body">
        <p className="card-title">
          <span className={styles.st}>
            Clinet Name :
            <span>
              <b>{text}</b>
            </span>
          </span>
        </p>
        <p className="card-text">
          <span className={styles.st}>Number of Coffee : {counter}</span>
        </p>
        <p className="card-text">
          <span className={styles.st}>Selected Coffee : {selectC}</span>
        </p>
        {isChecked ? <h6 className={styles.stm}>TakeAway</h6> : <h6>Sit</h6>}
        <a href="#" className="btn btn-primary m-1">
          Go somewhere
        </a>
        <button onClick={deleteCard} type="button" className="btn btn-danger ">
          Delete
        </button>
      </div>
    </div>
  );
}
