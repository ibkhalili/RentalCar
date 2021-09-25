import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setSearchCar } from 'redux/Cars/carsActions';
import { Col, Container, Row } from 'react-bootstrap';
import { allCarsSelector, searchCarSelector } from 'redux/Cars/carsSelectors';
import styled from "styled-components";
import dacia from '../images/dacia.jpeg'

const Input = styled.input`
border-radius: 45px;
font-size: 1rem;
font-weight: 200;
width: 190%;
margin-left: -43%;
`
function SearchCar() {
  const { searchCar } = useSelector((state) => state?.cars);
  const dispatch = useDispatch();

  return (
    <div className="form-container mt-3 d-flex justify-content-center">
      <form> 
        <Input
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
      <Row className="justify-content-center">
        {allCars?.map((car) => (
          <Col
            key={car.id}
            md={4}
            className={
              'd-flex flex-column m-2 p-4 text-white bg-info rounded-3 '
            }
          >
            <div className="img-fluid">
             <img  src={car?.img}/>
            </div>
            <div>{car?.name}</div>
            <div className="text-danger">{car?.price} MAD</div>
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
        <AllCars />
      </section>
    </main>
  );
}

export default Cars;
