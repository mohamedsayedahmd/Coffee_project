import shortid from "shortid";
import CheckBox from "./CheckBox";
import CountButtons from "./CountButtons";
import InputText from "./InputText";
import Select from "./Select";
import styles from "./style.module.css";
import React, { useCallback } from "react";
function Form({
  text,
  setText,
  setIsChecked,
  isChecked,
  counter,
  setCounter,
  ls,
  setLs,
  selectC,
}) {
  console.log("Form rendered");
  const changedMethod = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [text]
  );
  //handle submit buttion
  const handleSubmit = useCallback(
    (event) => {
      console.log("Form rendered");
      event.preventDefault(); //Prevent refreshing the page
      changedMethod(event);
      const data = {
        text,
        counter,
        selectC,
        isChecked,
        id: shortid.generate(),
      };
      setLs([...ls, data]);
      setText("");
      // text={current:""}
    },
    [text, counter, selectC, isChecked, ls]
  );
  return (
    <form onSubmit={handleSubmit} method="post" action="http://localhost:3009/">
      <h1>React Counter</h1>

      <CountButtons counter={counter} setCounter={setCounter} />

      <Select />

      <div className="counter_output m-2">
        <span className={styles.st}>
          <b name="count">{counter}</b>
        </span>

        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>
      <InputText text={text} setText={setText} />
      <button type="submit" className="m-3">
        Submit
      </button>
    </form>
  );
}
export default React.memo(Form);
