import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const handleSubmit = async () => {
    // headers = { "Content-Type": "multipart/form-data" };
    const res = await axios.post("http://localhost:5000/register", {
      email: user,
      password: pass,
    });
  };

  return (
    <div>
      <div>
        <h1 className="d-flex justify-content-center">Register</h1>
      </div>

      <div className="d-flex justify-content-center my-1">
        <form className="login-form">
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control rounded-left"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="form-group d-flex my-3">
            <input
              type="password"
              className="form-control rounded-left"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button
              onClick={handleSubmit}
              type="button"
              className="form-control btn btn-primary rounded submit px-3"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
