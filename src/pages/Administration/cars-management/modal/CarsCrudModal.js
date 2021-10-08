// @flow
import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CarsCrudForm } from 'pages/Administration/cars-management/form/CarsCrudForm';

export const CarsCrudModal = (props) => {
  const { show, handleClose } = props;

  return (
    <Modal
      size={'md'}
      show={show}
      onHide={handleClose}
      animation={false}
      backdrop={'static'}
    >
      <Modal.Header closeButton>
        <Modal.Title>Adding a car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CarsCrudForm handleClose={handleClose} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" form={'addCarForm'} type={'submit'}>
          Save ChangescarCcarCreatedreated
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
