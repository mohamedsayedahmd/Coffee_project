import React, { useCallback } from "react";
function InputText({ text, setText }) {
  console.log("InputText rendered");
  const changedMethod = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [text]
  );
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
