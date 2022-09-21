import shortid from "shortid";
import History from "./History";
import React from "react";

export default function historyList({ historyList, setHistoryList }) {
  // console.log("History List rendered");
  return (
    <div>
      <ul className="list-group">
        {console.log("History List rendered")}
        {historyList.map((m) => {
          // console.log("hello from histroyList")
          return (
            <li className="list-group-item" key={shortid.generate()}>
              <History m={m} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
