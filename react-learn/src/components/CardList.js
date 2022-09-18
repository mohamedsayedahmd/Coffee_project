import Card from "./Card";
import React from "react";
function CardList({ ls, setLs, historyList, setHistoryList, isChecked }) {
  console.log("Card List rendered");
  return (
    <>
      {ls.map((lsItem) => (
        <Card
          selectC={lsItem.selectC}
          key={lsItem.id}
          id={lsItem.id}
          lsItem={lsItem}
          setLs={setLs}
          ls={ls}
          text={lsItem.text}
          counter={lsItem.counter}
          setHistoryList={setHistoryList}
          historyList={historyList}
          isChecked={lsItem.isChecked}
        ></Card>
      ))}
    </>
  );
}
export default React.memo(CardList);
