import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: " ",
    password: " ",
  });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/auth/adminLogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard/home");
        } else {
          setErrors(result.data.Error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h3>Welcome to EMS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et est sed felis aliquet sollicitudin
            </p>
            <span>
              <p>Login with: </p>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true">Facebook</i>
              </a>
              <a href="#">
                <i className="fa fa-x" aria-hidden="true"></i> Login with X
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
          <div className="text-warning">{errors && errors}</div>
          <h5>Login</h5>
          <div className="inputs">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <br />
          <br />
          <div className="remember-me--forget-password">
            <p>Forget password?</p>
          </div>
          <br />
          <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
<div className="p-3 rounded w-50 border loginForm">
  <div className='text-warning'>
    {errors && errors}
  </div>
  <h2 className="text-center mb-4">Login Page</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        <strong>Email:</strong>
      </label>
      <input
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Enter Email..."
        className="form-control rounded-0"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        <strong>Password:</strong>
      </label>
      <input
        type="password"
        name="password"
        placeholder="Enter Password..."
        className="form-control rounded-0"
        onChange={(e) => setValues({ ...values, password: e.target.value })}

      />
    </div>
    <button className="btn btn-success w-100 rounded-0 mb-2" type="submit">
      Login
    </button>

    <div className="mb-3">
      <input type="checkbox" name="tick" id="tick" className='me-2'/>
      <label htmlFor="password" className="form-label">
        You agree with terms & conditions
      </label>
    </div>
  </form>
</div>
</div> */
}
