import * as React from 'react';
import { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { CarsCrudModal } from 'pages/Administration/cars-management/modal/CarsCrudModal';
import { CarsList } from 'pages/Administration/cars-management/list/CarsList';

export const CarsManagement = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <CarsCrudModal show={show} handleClose={() => setShow(false)} />
      <Card>
        <Card.Header className={'d-flex justify-content-end'}>
          <Button variant={'outline-primary'} onClick={() => setShow(true)}>
            Add Car
          </Button>
        </Card.Header>
        <Card.Body>
          <CarsList carCreated={show} />
        </Card.Body>
      </Card>
    </Container>
  );
};
