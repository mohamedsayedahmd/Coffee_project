import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form } from 'antd';

const Login = () => {
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      email: user,
      password: pass,
    });
    if (res.data === "no use found") {
      console.log("no use found");
    } else if (res.data === "Try Again Wrong Password") {
      console.log("Try Again Wrong Password");
    } else {
      console.log(res);
      navigate("/");
    }
  };

  return (
    <div>
      <div>
        <h1 className="d-flex justify-content-center">Login</h1>
      </div>

      <div className="d-flex justify-content-center my-1">
        <form className="login-form">
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control rounded-left"
              placeholder="Username "
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
              type="button"
              className="form-control btn btn-primary rounded submit px-3"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <div className="form-group d-md-flex">
            <div className="w-50">
              <label className="checkbox-wrap checkbox-primary">
                Remember Me
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="w-50 text-md-right">
              <a href="#">Forgot Password</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
