import React, { useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const Input = styled.input`
border-radius: 45px;
font-size: 1rem;
font-weight: 400;
width: 120%;
margin-left: -8%;

`;
const Btn = styled(Link)`
border-radius: 45px;
margin-left: 26%;

`;

function Login() {
  const [values, setValues] = useState({
    UserName: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handelUsernameChange = (e) => {
    setValues({ ...values, UserName: e.target.value });
  };
  const handelPasswordChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container mt-5 d-flex justify-content-center">
      <form className="form-field" onSubmit={handelSubmit}>
      <h3>Sign in</h3>
      <br></br>
        {submitted ? (
          <div className="success-message">Thank u for registring</div>
        ) : null}
        <Input
          type="text"
           onChange={handelUsernameChange}
          className="form-control"
          placeholder="username"
          name="username"
         value={values.UserName}
        />

        <br></br>
        <Input
          type="password"
          onChange={handelPasswordChange}
          className="form-control"
          placeholder="password"
          name="password"
          value={values.password}
        />
        <br></br>
        <Btn
          className="btn btn-success text-center w-50"
          type="submit"
        >
          Sign in
        </Btn>
      </form>
    </div>
  );
}

export default Login;
