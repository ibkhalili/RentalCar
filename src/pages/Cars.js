import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setSearchCar } from 'redux/Cars/carsActions';
import { Col, Container, Row } from 'react-bootstrap';
import { allCarsSelector, searchCarSelector } from 'redux/Cars/carsSelectors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fragment } from 'react';


const Input = styled.input`
  border-radius: 45px;
  font-size: 1rem;
  font-weight: 200;
  width: 190%;
  margin-left: -43%;
`;

const Img = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
// max-width: 200px;
// max-height: 100px;

`;
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


export const CarCard = (props) => {
  const { car } = props;
  return (
    <div className="col-sm-5 col-md-4 col-lg-3 mt-2">
      <div className="card" style={{height: "100%"}}>
        <Img className="card-img-top" src={car.img} />
        <div className="card-body">
          <h4 className="card-title text-truncate py-1">{car.name}</h4>
          <div className=" card-text text-muted">
            <h6 className="my-1">{`Prix  : ${car.price}$`}</h6>
            <h7>{`Prix par jour  : ${car.pricePerDay}$`}</h7>
          </div>
        </div>     
        <div className="card-footer ">
          {car.name}
          <Link
            to={`services/${car.id}`}
            className="btn btn-success float-right btn-sm color-dark"
           >
            voir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

function AllCars() {
  const allCars = useSelector(allCarsSelector, shallowEqual);
  

  return (
      <main className="container">
      <div className="text-center mt-5">
        <h4 style={{ fontWeight: 'bold' }}>Les voitures disponibles </h4>
        <h6 className="text-muted">Choisi le model préféré ...</h6>
      </div>
      <div className="row mx-3">
            {allCars?.map(car => (
              <CarCard key={car.id} car={car}/>
            ))}
          </div>
      </main>
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

  // console.log('state', state);
  // useEffect(() => {
  //   // dispatch(getCarsFromBackend);
  //   console.log('searchCar', searchCar);
  // }, [searchCar]);
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
