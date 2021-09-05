
import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import FormElement from "../components/Form/FormElement";
import { registerUser } from "../redux/User/userRegisterActions";

function SignupContainer({ userData, signupUser }) {
  const username = useRef();
  const password = useRef();

  const handleRegistration = (e) => {
    e.preventDefault();

    const data = {
      user: {
        username: username.current.value,
        password: password.current.value,
      },
    };
    signupUser(data);
  };

  let error = "";
  if (userData.error) {
    error = userData.error;
  }

  return userData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="orange" />
    </h2>
  ) : (
    <div>
      <p className="text-danger">{error}</p>
      <FormElement
        username={username}
        password={password}
        type="Sign up"
        handleSubmit={handleRegistration}
      />
    </div>
  )  
}

const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  signupUser: (info) => dispatch(registerUser(info)),
});

SignupContainer.propTypes = {
  signupUser: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
