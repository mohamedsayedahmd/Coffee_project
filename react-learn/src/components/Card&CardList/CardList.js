import React from "react";
import Card from "./Card";
function CardList({ ls, setLs, historyList, setHistoryList }) {
  console.log("Card List rendered");
  return (
    <>
      {ls.map((lsItem) => (
        <Card
          key={lsItem.id}
          lsItem={lsItem}
          ls={ls}
          setLs={setLs}
          historyList={historyList}
          setHistoryList={setHistoryList}
          query="user"
        ></Card>
      ))}
    </>
  );
}
export default React.memo(CardList);
