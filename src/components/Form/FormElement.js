import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'index.css';

const Input = styled.input`
  border-radius: 45px;
  font-size: 1rem;
  font-weight: 300;
  width: 60%;
  margin-left: 20%;
`;
const Btn = styled.nav`
  border-radius: 45px;
  margin-left: 20%;
`;

const Brg = styled.p`
  margin-left: 20%;
  margin-top: -2%;
  margin-right: 20%;
`;

function FormElement({
  type,
  handleSubmit,
  username,
  password,
  FirstName,
  LastName,
  Email,
}) {
  // useEffect(() => {
  //   username.current.focus();
  // }, []);

  return (
    <form>
      <h3>Sign Up</h3>
      <br></br>
      <div className="form-group">
        <Input
          type="text"
          className="form-control"
          placeholder="First name"
          value={FirstName}
        />
      </div>
      <br></br>
      <div className="form-group">
        <Input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={LastName}
        />
      </div>
      <br></br>
      <div className="form-group">
        <Input
          type="text"
          className="form-control"
          placeholder="username"
          ref={username}
        />
      </div>
      <br></br>
      <div className="form-group">
        <Input
          type="email"
          className="form-control"
          placeholder="email adresse"
          value={Email}
        />
      </div>
      <br></br>
      <div className="form-group">
        <Input
          type="password"
          className="form-control"
          placeholder="password"
          ref={password}
        />
      </div>
      <br></br>
      <Btn type="submit" className="btn btn-success btn-block">
        {type}
      </Btn>
      <Brg className="forgot-password text-right">
        dèja Enregistrer <a href="/signin">sign in?</a>
      </Brg>
    </form>
  );
}

FormElement.propTypes = {
  type: PropTypes.string.isRequired,
  username: PropTypes.instanceOf(Object).isRequired,
  password: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormElement;
