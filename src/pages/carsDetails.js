import React, { useEffect, useState } from 'react';
import { connect, shallowEqual, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import RentForm from '../components/RentForm';
// import CarEditForm from './CarEditForm';
import '../Css/carsDetails.css';
import { allCarsSelector } from 'redux/Cars/carsSelectors';
import axios from 'axios';
import { APP_LOGIN_TOKEN } from 'common/utils/constants';
// import { mapCarsToProps } from '../helpers';
// // import { addRent, editCar, removeCar } from '../actions/index';
// import { apiAddRent, apiRemoveCar, apiEditCar } from '../axios';

function CarDetails() {
  const { id } = useParams();
  const [formStatus, setFormStatus] = useState(false);
  const [editFormStatus, setEditFormStatus] = useState(false);

  // const cars = useSelector(allCarsSelector, shallowEqual);
  // const car = cars.filter(car => car.id === parseInt(id, 10))[0];
  const [car, setCar] = useState({});

  useEffect(() => {
    (async function () {
      await axios
        .get(`/cars/${id}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage?.getItem(APP_LOGIN_TOKEN) || ''
            }`,
          },
        })
        .then((response) => {
          const { data } = response;
          setCar(data);
        })
        .catch((err) => console.error('error: ', err));
    })();
  }, []);

  // const models = cars.map(car => car.model);
  // const uniqModels = models.filter(
  //   (item, index) => models.indexOf(item) === index,
  // );
  const info = {
    //userName: session.user.userName,
    model: car.model,
  };
  //   const userId = session.user.id;
  const handleRentClick = () => {
    setFormStatus(!formStatus);
  };
  const handleEditCarClick = () => {
    setEditFormStatus(!editFormStatus);
  };

  const handleEditCar = (data) => {
    const car = { ...data, carImg: data.carImg[0] };
    const formData = new FormData();
    formData.append('model', car.model);
    formData.append('color', car.color);
    formData.append('bodyStyle', car.bodyStyle);
    formData.append('pricePerDay', car.pricePerDay);
    formData.append('doors', car.doors);
    formData.append('luggages', car.luggages);
    formData.append('seats', car.seats);
    formData.append('emissionsClass', car.emissionsClass);
    formData.append('transmission', car.transmission);
    formData.append('engine', car.engine);
    formData.append('rentDeposit', car.rentDeposit);
    formData.append('carImg', car.carImg);
    // apiEditCar(id, formData, editCar);
  };
  const handleAddRent = (data) => {
    const rent = {
      ...data,
      pricePerDay: car.pricePerDay,
      status: 'Pending',
    };
    // apiAddRent(rent, userId, addRent);
  };

  const handleRemoveCar = (id) => {
    //  apiRemoveCar(id, removeCar);
  };

  const RentButton = () => (
    <button
      onClick={handleRentClick}
      className="btn btn-success w-05 mb-2 btn-customized"
      type="button"
    >
      Rent car
      <i className="fa fa-arrow-right ml-2" />
    </button>
  );

  const LoginLink = () => (
    <>
      <h6>Please login to rent this car</h6>
      <Link to="/login" style={{ color: '#97BF0F' }}>
        Login
      </Link>
    </>
  );

  const ConfigBtns = () => (
    <div className="my-2">
      <button
        onClick={handleEditCarClick}
        className="btn  rounded-pill  btn-customized"
        type="button"
      >
        <i className="fa fa-cog mr-2" />
        Edit car
      </button>
      <Link
        to="/cars"
        onClick={() => handleRemoveCar(car.id)}
        className="btn ml-4 rounded-pill   btn-customized"
        type="button"
      >
        <i className="fa fa-trash mr-2" />
        Delete car
      </Link>
    </div>
  );
  return (
    <>
      <div className="d-flex flex-column justify-content-center pr-5 vh-100 w-100">
        <h5 style={{ textAlign: 'right' }}>
          {car.name}
          <br />
        </h5>
        <h6 className="text-muted" style={{ textAlign: 'right' }}>
          {car.cost} MAD /Day
          <br />
        </h6>
        <div className="d-flex justify-content-between mt-2 ">
          <div className="d-flex align-items-center ml-5 col-7">
            <img
              className="w-100"
              src={car.images?.[0]}
              alt={car.name}
              style={{ maxHeight: '500px' }}
            />
          </div>
          <div className="col-4" style={{ padding: 1 }}>
            <div
              className="text-center p-2"
              style={{ background: 'var(--light)', borderRadius: 15 }}
            >
              <div className="table-responsive" style={{ fontSize: 20 }}>
                <table className="table">
                  <thead>
                    <tr />
                  </thead>
                  <tbody>
                    <tr>
                      <td>COLOR</td>
                      <td>{'blue'}</td>
                    </tr>
                    <tr>
                      <td>BODY STYLE</td>
                      <td>{car.bodyStyle}</td>
                    </tr>
                    <tr>
                      <td>DOORS</td>
                      <td>{car.doors}</td>
                    </tr>
                    <tr>
                      <td>
                        LUGGAGES
                        <br />
                      </td>
                      <td>{car.luggages}</td>
                    </tr>
                    <tr>
                      <td>SEATS</td>
                      <td>{car.seats}</td>
                    </tr>
                    <tr>
                      <td>
                        ENGINE
                        <br />
                      </td>
                      <td>{car.engine}</td>
                    </tr>
                    <tr>
                      <td>EMISSIONS CLASS</td>
                      <td>{car.emissionsClass}</td>
                    </tr>
                    <tr>
                      <td>TRANSMISSION</td>
                      <td>{car.transmission}</td>
                    </tr>
                    <tr>
                      <td>RENT DEPOSIT</td>
                      <td>{car.rentDeposit}$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <RentButton />
              {/* {session.isLoggedIn && session.user.role === 'USER' ? (
              ) : session.isLoggedIn && session.user.role === 'ADMIN' ? (
                <ConfigBtns />
              ) : (
                <LoginLink />
              )} */}
            </div>
          </div>
        </div>
        <div className="w-100" style={{ textAlign: 'left' }}>
          <Link to="/services">
            <i className="fa fa-caret-left return-btn" />
          </Link>
        </div>
      </div>
      {/*<RentForm*/}
      {/*  formStatus={formStatus}*/}
      {/*  handleRentClick={handleRentClick}*/}
      {/*  handleAddRent={handleAddRent}*/}
      {/*  // uniqModels={uniqModels}*/}
      {/*  info={info}*/}
      {/*/>*/}
      {/* <CarEditForm
        editFormStatus={editFormStatus}
        handleEditCarClick={handleEditCarClick}
        handleEditCar={handleEditCar}
        car={car}
      /> */}
    </>
  );
}

CarDetails.propTypes = {
  session: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    user: PropTypes.shape({
      id: PropTypes.number,
      userName: PropTypes.string,
      role: PropTypes.string,
    }),
  }).isRequired,
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      model: PropTypes.string,
      color: PropTypes.string,
      doors: PropTypes.string,
      luggages: PropTypes.string,
      seats: PropTypes.string,
      emissionsClass: PropTypes.string,
      transmission: PropTypes.string,
      engine: PropTypes.string,
      rentDeposit: PropTypes.string,
      pricePerDay: PropTypes.string,
      carImg: PropTypes.string,
    }),
  ).isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
  editCar: PropTypes.func.isRequired,
  removeCar: PropTypes.func.isRequired,
  addRent: PropTypes.func.isRequired,
};

// export default connect(mapCarsToProps, { addRent, editCar, removeCar })(
//   CarDetails,
// );
export default CarDetails;
