import shortid from "shortid";
import CheckBox from "./CheckBox";
import CountButtons from "./CountButtons";
import InputText from "./InputText";
import Select from "./Select";
import styles from "./style.module.css";
import axios from "axios";
export default function Form({
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
  const handleSubmit = async (event) => {
    event.preventDefault(); //Prevent refreshing the page
    const data = {
      text: text,
      counter: counter,
      selectC: selectC,
      isChecked: isChecked,
      id: shortid.generate(),
    };
    setLs([...ls, data]);
    setText("");

    await axios({
      url: "http://localhost:5000",
      method: "POST",
      data: data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
