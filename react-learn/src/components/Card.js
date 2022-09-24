import { useCallback } from "react";
import React from "react";
import styles from "./style.module.css";
import axios from "axios";
function Card({ lsItem, setLs, ls, id, setHistoryList, historyList }) {
  console.log("Card rendered");
  const deleteCard = async () => {
    try {
      console.log("my ID is ");
      console.log(lsItem._id);
      let tempList = historyList;
      tempList.push(lsItem);
      setHistoryList(tempList);
      setLs(ls.filter((item) => item.id !== lsItem.id));
      console.log("lsItem._id  : " + id);
      console.log(lsItem);
      await axios
        .delete("http://localhost:5000/user/" + lsItem.id)
        .then(() => console.log("deleted..."));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card" width={200}>
      <div className="card-body">
        <p className="card-title">
          <span className={styles.st}>
            Clinet Name :
            <span>
              <b>{lsItem.text}</b>
            </span>
          </span>
        </p>
        <p className="card-text">
          <span className={styles.st}>Number of Coffee : {lsItem.counter}</span>
        </p>
        <p className="card-text">
          <span className={styles.st}>Selected Coffee : {lsItem.selectC}</span>
        </p>
        {lsItem.isChecked ? (
          <h6 className={styles.stm}>TakeAway</h6>
        ) : (
          <h6>Sit</h6>
        )}
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
export default React.memo(Card);
