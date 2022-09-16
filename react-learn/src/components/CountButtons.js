import React, { useCallback } from "react";
function CountButtons({ count, setCounter }) {
  console.log("CountButtons rendered");

  //Add button functions:

  const ss = useCallback((expression) => {
    switch (expression) {
      case 0:
        setCounter((count) => count + 1);
        break;
      case 1:
        setCounter((count) => count - 1);
        break;
      case 2:
        setCounter((count) => count * 0);
        break;
      default:
      // code block
    }
  }, count);
  return (
    <>
      {/* increase , Decrease ,Zero buttons  */}
      <div className="btn_container m-1">
        <button
          type="button"
          className="btn btn-dark m-1"
          onClick={() => ss(2)}
        >
          →Zero←
        </button>
        <button
          type="button"
          className="btn btn-dark m-1"
          onClick={() => ss(0)}
        >
          Add One
        </button>
        <button
          type="button"
          className="btn btn-dark m-1"
          onClick={() => ss(1)}
        >
          Sub One
        </button>
      </div>
    </>
  );
}
export default React.memo(CountButtons);
