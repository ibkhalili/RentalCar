import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Section2Card (props) {
  const { car } = props;
  return (
    <div className="card mx-2" style={{ borderStyle: 'none' }}>
      <img
        className="card-img-top w-10 d-block"
        src={car.img}
        alt={car.name}
      />
      <div className="card-body" style={{ padding: '10px' }}>
        <h5 className="card-title" style={{ fontSize: '14px' }}>
          <Link to={`/services/${car.id}`} style={{ color: "black" }}>
            {car.name}
          </Link>
        </h5>
        <p className="text-muted" style={{ fontSize: '12px' }}>
          {`${car.color}, ${car.bodyStyle}, luggages: ${car.luggages}, ${car.transmission}, ${car.emissionsClass}`}
          <br />
        </p>
      </div>
    </div>
  );
};

Section2Card.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    model: PropTypes.string,
    carImg: PropTypes.string,
    color: PropTypes.string,
    bodyStyle: PropTypes.string,
    luggages: PropTypes.string,
    transmission: PropTypes.string,
    emissionsClass: PropTypes.string,
  }).isRequired,
};

export default Section2Card;
