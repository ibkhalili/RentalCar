import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogoutRequest } from 'redux/User/userAction';
import { APP_LOGIN_TOKEN, APP_LOGIN_USER } from 'common/utils/constants';
import { useEffect } from 'react';

export const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem(APP_LOGIN_TOKEN);
    localStorage.removeItem(APP_LOGIN_USER);
    dispatch(userLogoutRequest());
  }, [dispatch]);

  return <Redirect to={'/'} />;
};
