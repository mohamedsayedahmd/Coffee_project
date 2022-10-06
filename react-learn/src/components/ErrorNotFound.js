import React from "react";
import { error_404 } from "./../images/types";
const ErrorNotFound = () => {
  return (
    <div className="container m-1">
      <img className="img-fluid" src={error_404} />
    </div>
  );
};
export default ErrorNotFound;
