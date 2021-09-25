import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/User/userAction';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { redirectToSelector } from 'redux/User/userSelectors';

// const Input = styled.input`
//   border-radius: 45px;
//   font-size: 1rem;
//   font-weight: 400;
//   width: 120%;
//   margin-left: -8%;
// `;
// const Btn = styled(Link)`
//   border-radius: 45px;
//   margin-left: 26%;
// `;

function Login() {
  const dispatch = useDispatch();

  const redirectTo = useSelector(redirectToSelector, shallowEqual);

  const [values, setValues] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handelUsernameChange = (e) => {
    setValues({ ...values, username: e.target.value });
  };
  const handelPasswordChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch(loginUser(values));
  };

  if (redirectTo !== '') {
    return <Redirect to={redirectTo} />;
  }

  return (
    <div className="form-container mt-5 d-flex justify-content-center">
      <Form className="form-field" onSubmit={handelSubmit}>
        <h3>Sign in</h3>
        <br></br>
        {submitted ? (
          <div className="success-message">Thank u for registring</div>
        ) : null}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handelUsernameChange}
            name="username"
            type="text"
            placeholder="Enter your login"
          />
          {/*<Form.Text className="text-muted">*/}
          {/*  We'll never share your email with anyone else.*/}
          {/*</Form.Text>*/}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handelPasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name={'rememberMe'}
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/*<Input*/}
        {/*  type="text"*/}
        {/*  onChange={handelUsernameChange}*/}
        {/*  className="form-control"*/}
        {/*  placeholder="username"*/}
        {/*  name="username"*/}
        {/*  value={values.username}*/}
        {/*/>*/}

        {/*<br></br>*/}
        {/*<Input*/}
        {/*  type="password"*/}
        {/*  onChange={handelPasswordChange}*/}
        {/*  className="form-control"*/}
        {/*  placeholder="password"*/}
        {/*  name="password"*/}
        {/*  value={values.password}*/}
        {/*/>*/}
        {/*<br></br>*/}
        {/*<Button className="btn btn-success text-center w-50" type="submit">*/}
        {/*  Sign in*/}
        {/*</Button>*/}
      </Form>
    </div>
  );
}

export default Login;
