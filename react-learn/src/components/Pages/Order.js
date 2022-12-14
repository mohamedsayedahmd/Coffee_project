import React from "react";
import { useState, useContext, createContext, useEffect } from "react";
import CardList from "../Card&CardList/CardList";
import HistoryList from "./../History&HistoryList/HistoryList";
import Form from "./../Form/Form";
import { FavContext } from "../FavContext";
export const UserContext = createContext(); //new day

function Homepage() {
  //new
  // const { value, setValue } = useContext(FavContext);
  //end new
  console.log("Order rendered");

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(""); //get the text from the input
  const [historyList, setHistoryList] = useState([]); //get value and set history
  const [ls, setLs] = useState([]); //Main List has all the items
  const [selectC, setSelectC] = useState(""); // state of selected value
  const [isChecked, setIsChecked] = useState(false);
  const [favList, setFavList] = useState([]);
  let API = "http://localhost:5000/user";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw Error("did not receive expected data");
        }
        const listItems = await response.json();
        setLs(listItems);
        // setFetchError(null);
      } catch (err) {
        console.log(err);
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
          <HistoryList historyList={historyList} />
        </center>
      </div>
      {/* <h1>{value}</h1> */}
    </UserContext.Provider>
  );
}
export default React.memo(Homepage);
