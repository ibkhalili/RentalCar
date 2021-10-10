import * as React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { APP_LOGIN_TOKEN } from 'common/utils/constants';

export const CarsCrudForm = ({ handleClose }) => {
  const [values, setValues] = useState({
    name: '',
    cost: 100,
    file: null,
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.id]:
        e.target.id === 'file' ? e.target.files?.[0] : e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (values.file) {
      (async function () {
        let formData = new FormData();

        formData.append('file', values.file);
        formData.append(
          'car',
          JSON.stringify({ name: values.name, cost: values.cost }),
        );
        await axios
          .post('/cars', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${
                localStorage?.getItem(APP_LOGIN_TOKEN) || ''
              }`,
            },
          })
          .then(({ data }) => {
            console.log('returns: ', data);
            handleClose();
          })
          .catch((err) => console.log('returns error: ', err));
      })();
    }
  };

  return (
    <Form id={'addCarForm'} onSubmit={onSubmit}>
      <FloatingLabel controlId="name" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Renault"
          value={values?.name}
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="cost" label="Cost" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Renault"
          value={values?.cost}
          onChange={handleChange}
        />
      </FloatingLabel>
      <Form.Group className="mb-3" controlId="file">
        <Form.Control type="file" multiple onChange={handleChange} />
      </Form.Group>
      {/*<Form.Group controlId="file" className="mb-3">*/}
      {/*  <Form.Label>Multiple files input example</Form.Label>*/}
      {/*  <Form.Control type="file" multiple />*/}
      {/*</Form.Group>*/}
    </Form>
  );
};
