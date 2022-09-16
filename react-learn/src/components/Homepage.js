import { React, useState, createContext, useCallback } from "react";
import CardList from "./CardList";
import HistoryList from "./HistoryList";
import Form from "./Form";
import styles from "./style.module.css";
export const UserContext = createContext(); //new day

export default function Homepage(props) {
  console.log("Home page rendered");
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(""); //get the text from the input
  const [historyList, setHistoryList] = useState([]); //get value and set history
  const [ls, setLs] = useState([]); //Main List has all the items
  const [selectC, setSelectC] = useState(""); // state of selected value
  const [isChecked, setIsChecked] = useState(false);
  return (
    <UserContext.Provider value={{ selectC, setSelectC }}>
      <div className="container">
        <center>
          <hr />
          <Form
            text={text}
            setText={setText}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            counter={counter}
            setCounter={setCounter}
            setLs={setLs}
            ls={ls}
            selectC={selectC}
          />
          <CardList
            isChecked={isChecked}
            setLs={setLs}
            ls={ls}
            historyList={historyList}
            setHistoryList={setHistoryList}
          />
          <HistoryList historyList={historyList} />
        </center>
      </div>
    </UserContext.Provider>
  );
}
