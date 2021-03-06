import { createSelector } from 'reselect';

export const carsSelector = (state) => state?.cars;

export const allCarsSelector = createSelector(
  carsSelector,
  (cars) => cars?.allCars,
);

export const carsIsLoadingSelector = createSelector(
  carsSelector,
  (cars) => cars?.isLoading,
);

export const searchCarSelector = createSelector(
  carsSelector,
  (cars) => cars?.searchCar,
);
