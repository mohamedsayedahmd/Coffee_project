import React from "react";
import { useState, createContext, useCallback, useEffect } from "react";
import CardList from "./CardList";
import HistoryList from "./HistoryList";
import Form from "./Form";
export const UserContext = createContext(); //new day

function Homepage() {
  console.log("Order rendered");

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(""); //get the text from the input
  const [historyList, setHistoryList] = useState([]); //get value and set history
  const [ls, setLs] = useState([]); //Main List has all the items
  const [selectC, setSelectC] = useState(""); // state of selected value
  const [isChecked, setIsChecked] = useState(false);
  let API = "http://localhost:5000/user";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw Error("did not receive expected data");
        }
        const listItems = await response.json();
        console.log(listItems);
        // console.log(listItems);
        setLs(listItems);
        // setFetchError(null);
      } catch (err) {
        // setFetchError(err.message);
      } finally {
        // setIsLoding(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 1200);
  }, []);

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
          <HistoryList
            historyList={historyList}
            setHistoryList={setHistoryList}
          />
        </center>
      </div>
    </UserContext.Provider>
  );
}
export default React.memo(Homepage);
