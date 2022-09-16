import React from "react";
function History({ m }) {
  console.log("History rendered");
  return (
    <>
      <b>{m.selectC}</b> Order of by "<b>{m.text}</b>" with amout of order :{" "}
      <b>{m.counter}</b>
    </>
  );
}
export default React.memo(History);
