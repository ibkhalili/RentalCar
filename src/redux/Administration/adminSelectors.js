import { createSelector } from 'reselect';

export const adminSelector = (state) => state?.admin;

export const getUsersSelector = createSelector(
    adminSelector,
    (admin) => admin?.users,
);

export const adminIsLoadingSelector = createSelector(
    adminSelector,
    (admin) => admin?.isLoading,
);