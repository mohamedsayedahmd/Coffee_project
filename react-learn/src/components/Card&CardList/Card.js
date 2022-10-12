import React, { useContext } from "react";
import styles from "./../style.module.css";
import axios from "axios";
import { FavContext } from "../FavContext";
function Card({ lsItem, setLs, ls, setHistoryList, historyList, query }) {
  console.log("Card rendered");
  const { value, setValue } = useContext(FavContext);

  const onFavorite = (fID) => {
    if (value.includes(fID)) {
      console.log("ohhh noooo");
    } else {
      let temp = [];
      temp = value;
      console.log(temp);
      temp.push(fID);
      setValue(temp);
      console.log(fID);
    }
  };

  const sendPostRequest = async () => {
    try {
      let newPost = {
        text: lsItem.text,
        counter: lsItem.counter,
        selectC: lsItem.selectC,
        isChecked: lsItem.isChecked,
        id: lsItem.id,
      };
      const resp = await axios.post("http://localhost:5000/favorite", newPost);
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const deleteCard = async () => {
    try {
      let tempList = historyList;
      if (query === "favorite") {
        
        setValue(value.filter((item) => item.id !== lsItem.id));
        // console.log("my ID is ");
      } else if (query === "user") {
        tempList.push(lsItem);
        setHistoryList(tempList);
        setLs(ls.filter((item) => item.id !== lsItem.id));
      } else {
        console.log("error");
      }

      // console.log("lsItem._id  : " + id);
      // console.log(lsItem);

      await axios
        .delete(`http://localhost:5000/${query}/${lsItem.id}`)
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

        <div>
          {query !== "favorite" ? (
            <button
              onClick={() => sendPostRequest()}
              className="btn btn-success "
            >
              Add to Favorite
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default React.memo(Card);
