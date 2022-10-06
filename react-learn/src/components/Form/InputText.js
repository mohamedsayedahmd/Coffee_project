import React from "react";
function InputText({ text, setText }) {
  console.log("InputText rendered");
  const changedMethod = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input
        name="clintName"
        className="form-control "
        style={{ width: 200 }}
        value={text}
        type="text"
        onChange={changedMethod}
        placeholder="Enter Client Name"
      ></input>
    </div>
  );
}
export default React.memo(InputText);
