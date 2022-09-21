import React, { useContext, useCallback } from "react";
import { UserContext } from "./Order";

function Select() {
  const user = useContext(UserContext);

  // console.log(user)
  console.log("Select rendered");

  const selectHandle = (event) => {
    user.setSelectC(event.target.value);
  };
  return (
    <>
      <select
        style={{ width: 200 }}
        className="form-select"
        aria-label="Default select example"
        id="lang"
        onChange={selectHandle}
      >
        <option value="Select">Select</option>
        <option value="Ice Coffee">Ice Coffee</option>
        <option value="Hot Chocolate">Hot Chocolate</option>
        <option value="Espresso">Espresso</option>
        <option value="Black Coffee">Black Coffee</option>
        {/* {console.log(selectC)} */}
      </select>
    </>
  );
}
export default React.memo(Select);
