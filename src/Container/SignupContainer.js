import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import FormElement from '../components/Form/FormElement';
import { registerUser } from '../redux/User/userRegisterActions';

function SignupContainer({ userData, signupUser }) {
  const handleRegistration = (data) => {
    console.log('submitted data: ', data);

    signupUser(data);
  };

  let error = '';
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
      <FormElement type="Sign up" onSubmit={handleRegistration} />
    </div>
  );
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
