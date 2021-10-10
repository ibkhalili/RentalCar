
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { allCarsSelector } from 'redux/Cars/carsSelectors';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../Css/Carousel.css';
import Section2Card from './section2Card';

const LeftArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={` arrow ${className}`} style={style} />
  );
};

const RightArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={` arrow ${className}`} style={style} />
  );
};

function Carousel  ()  {
 const allCars = useSelector(allCarsSelector, shallowEqual);
 const latestCars = allCars.slice(0, 6);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <Slider className="mx-5 mt-1"  {...settings}>
      {latestCars.map(car => (
        <Section2Card key={car.id} car={car} />
      ))}
    </Slider>
    
  );
};

LeftArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

RightArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Carousel.propTypes = {
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
};

// export default connect(mapCarsToProps)(Section2);

export default Carousel;

