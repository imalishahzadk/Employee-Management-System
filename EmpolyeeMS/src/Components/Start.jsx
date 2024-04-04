import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Start = () => {
  useEffect(() => {
    axios.get("http://localhost:8080/verify")
    .then(result => {
      if(result.data.Status){
        if(result.data.role === "admin"){
          navigate ("/dashboard") 
        }else{
          navigate("/empDetails/"+result.data.id)
        }
      }
    })
    .catch(err => console.log(err))
  },[])

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
        crossOrigin="anonymous"
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
              <p>Login as: </p>
              <a>
                <i onClick={() => {navigate("/adminLogin")}}>Login as Admin</i>
              </a>
              <a>
                <i onClick={() => {navigate("/empLogin")}}>Login as Employee</i> 
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="text-warning">{errors && errors}</div>
          <form onSubmit={handleSubmit}>
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

export default Start;