import React from "react";
import Card from "./Card";
import { useCallback } from "react";
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
        ></Card>
      ))}
    </>
  );
}
export default React.memo(CardList);
