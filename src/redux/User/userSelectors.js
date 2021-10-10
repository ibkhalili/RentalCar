import { createSelector } from 'reselect';

export const userSelector = (state) => state?.user;

export const redirectToSelector = createSelector(
  userSelector,
  (user) => user?.redirectTo,
);

export const loggedInUserSelector = createSelector(
  userSelector,
  (user) => user?.username,
);

export const isLoggedSelector = createSelector(
  userSelector,
  (user) => user?.loggedIn,
);
