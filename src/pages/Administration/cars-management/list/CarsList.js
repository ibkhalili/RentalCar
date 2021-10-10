import * as React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { APP_LOGIN_TOKEN } from 'common/utils/constants';

export const CarsList = ({ carCreated }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // to reload when closing the modal (creating a card)
    if (!carCreated) {
      (async function () {
        await axios
          .get('/cars', {
            headers: {
              Authorization: `Bearer ${
                localStorage?.getItem(APP_LOGIN_TOKEN) || ''
              }`,
            },
          })
          .then(({ data }) => {
            setCars(data?.content);
          })
          .catch((err) => console.error('returns error: ', err));
      })();
    }
  }, [carCreated]);
  return (
    <Container fluid={false}>
      <Row className="justify-content-center">
        {cars?.map((car) => (
          <Col
            key={car.uuid}
            md={4}
            className={
              'd-flex flex-column m-2 p-4 text-white bg-info rounded-3 '
            }
          >
            <div className="img-fluid">
              <img alt={'some-car'} src={car?.images?.[0]} width={250} />
            </div>
            <div>{car?.name}</div>
            <div className="text-danger">{car?.cost} MAD</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
