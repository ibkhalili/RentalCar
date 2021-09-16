import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setSearchCar } from 'redux/Cars/carsActions';
import { Col, Container, Row } from 'react-bootstrap';
import { allCarsSelector, searchCarSelector } from 'redux/Cars/carsSelectors';

function SearchCar() {
  const { searchCar } = useSelector((state) => state?.cars);
  const dispatch = useDispatch();

  // console.log('searchCar', searchCar);

  return (
    <div>
      <form>
        <input
          value={searchCar}
          placeholder="search cars..."
          onChange={(event) => {
            dispatch(setSearchCar(event.target.value));
          }}
        />
      </form>
    </div>
  );
}

function AllCars() {
  const allCars = useSelector(allCarsSelector, shallowEqual);
  return (
    <Container fluid={false}>
      <Row>
        {allCars?.map((car) => (
          <Col
            key={car.id}
            md={4}
            className={
              'd-flex flex-column m-2 p-4 text-white bg-info rounded-3'
            }
          >
            <div>{car?.name}</div>
            <div className={'text-danger'}>{car?.price} MAD</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export const getCarsfrombackend = () => {
  // axios.get("url:8080/cars").then(data => {
  //     console.log("data", data);
  //     dispatch(setCars(data))
  // })
  // axios.get('url:8080/cars/1', {
  //   headers: { Authorization: localStorage.getItem('CarRentalsToken') },
  // });
};

function Cars() {
  // const visibleAllCars = getFilteredCars(state.allCars, state.searchTerm);
  const state = useSelector((state) => state);
  const searchCar = useSelector(searchCarSelector);
  // or we can use the predefined function in carsSelectors.js
  // const cars = useSelector(carsSelector);

  console.log('state', state);
  useEffect(() => {
    // dispatch(getCarsFromBackend);
    console.log('searchCar', searchCar);
  }, [searchCar]);
  return (
    <main>
      <section>
        <SearchCar />
      </section>
      <hr />
      <section>
        <h1>All cars</h1>
        <AllCars />
      </section>
    </main>
  );
}

export default Cars;
