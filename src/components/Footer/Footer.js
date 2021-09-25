import React from 'react';
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <MDBFooter
      style={{ padding: '5px' }}
      className="footer px-3 py-4 my-2 w-60 text-white"
    >
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol>
            <h5 className="title">About Us</h5>
            <h9>
              TAZOTA CAR is located in EL JADIDA, Morocco and is part of the
              Automotive Equipment Rental and Leasing Industry. TAZOTA CAR has
              10 total employees across all of its locations and generates
              $41,016 in sales (USD). (Employees figure is modelled).
            </h9>
            <div className="social-container my-4 w-3">
              <a
                href="https://www.youtube.com"
                className="youtube social w-50"
                style={{ color: 'red' }}
              >
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="facebook social mx-3"
                style={{ color: 'blue' }}
              >
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
              <a
                href="http://www.instagram.com"
                className="Linkdim social  mx-3"
                style={{ color: 'blue' }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </a>
              <a
                href="https://wwww.twitter.com w-50 "
                className="twitter social"
                style={{ color: 'deepskyblue' }}
              >
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title md-8">Links</h5>
            <div className=" menu px-5 mx-4" style={{ width: '81%' }}>
              <ul>
                <li className="list-unstyled">
                  <Link to="services" style={{ color: 'white' }}>
                    services
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link to="dicover" style={{ color: 'white' }}>
                    discover
                  </Link>
                </li>
                <li className="list-unstyled" style={{ color: 'white' }}>
                  <Link to="signup" style={{ color: 'white' }}>
                    sign up
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link to="signin" style={{ color: 'white' }}>
                    sign in
                  </Link>
                </li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title mx-7">Contact Us</h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center text-white py-2 bg-secondary">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a
            href="https://www.mdbootstrap.com"
            style={{ color: 'rgb(250, 250, 183)' }}
          >
            {' '}
            www.Tazotacar.com{' '}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;
