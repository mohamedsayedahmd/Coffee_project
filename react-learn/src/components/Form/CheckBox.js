import React, { useCallback } from "react";
import styles from "./../style.module.css";
function CheckBox({ isChecked, setIsChecked }) {
  console.log("CheckBox rendered");

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={styles.sc}>
        <div className="input-group-text">
          <input
            checked={isChecked}
            onChange={handleOnChange}
            className="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          <label>Take Away</label>
        </div>
      </div>
    </>
  );
}
export default React.memo(CheckBox);
