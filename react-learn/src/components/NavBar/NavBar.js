import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  console.log("NavBar rendered");
  return (
    <div>
      <div className={"navbar navbar-expand-lg bg-light "}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/order">
            Order Now
          </Link>
          <Link className="navbar-brand" to="/about">
            about us
          </Link>
        </div>
      </div>
    </div>
  );
}
export default React.memo(NavBar);
