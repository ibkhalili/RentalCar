import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'index.css';
import { useForm } from 'react-hook-form';

const Input = styled.input`
  border-radius: 45px;
  font-size: 1rem;
  font-weight: 300;
  width: 60%;
  margin-left: 20%;
`;
const Btn = styled.button`
  border-radius: 45px;
  margin-left: 20%;
`;

const Brg = styled.p`
  margin-left: 20%;
  margin-top: -2%;
  margin-right: 20%;
`;

function FormElement({ type, onSubmit }) {
  // useEffect(() => {
  //   username.current.focus();
  // }, []);

  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Sign Up</h3>
      <br></br>
      <div className="form-group">
        <Input
          type="text"
          className="form-control"
          placeholder="First name"
          {...register('firstName')}
        />
      </div>
      <br></br>
      <div className="form-group">
        <Input
          type="text"
          className="form-control"
          placeholder="Last name"
          {...register('lastName')}
        />
      </div>
      <br></br>
      <div className="form-group">
        <Input
          type="text"
          className="form-control"
          placeholder="username"
          {...register('login')}
        />
      </div>
      <br></br>
      <div className="form-group">
        <Input
          type="email"
          className="form-control"
          placeholder="email adresse"
          {...register('email')}
        />
      </div>
      <br></br>
      <div className="form-group">
        <Input
          type="password"
          className="form-control"
          placeholder="password"
          {...register('password')}
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
  // username: PropTypes.instanceOf(Object).isRequired,
  // password: PropTypes.instanceOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormElement;
