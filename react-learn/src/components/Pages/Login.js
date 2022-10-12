import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <h1 className="d-flex justify-content-center">Login</h1>
      </div>

      <div className="d-flex justify-content-center my-1">
        <form action="#" className="login-form">
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control rounded-left"
              placeholder="Username "
              required
            />
          </div>
          <div className="form-group d-flex my-3">
            <input
              type="password"
              className="form-control rounded-left"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="form-control btn btn-primary rounded submit px-3"
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
