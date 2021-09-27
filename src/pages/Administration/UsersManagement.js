import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from 'redux/Administration/adminActions';
import {
  adminIsLoadingSelector,
  getUsersSelector,
} from 'redux/Administration/adminSelectors';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

export const UsersManagement = () => {
  const dispatch = useDispatch();

  const [isLoading, users] = useSelector((s) => [
    adminIsLoadingSelector(s),
    getUsersSelector(s),
  ]);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <BlockUi blocking={isLoading}>
      <Container>
        <Row>
          {users?.map((user) => (
            <Col key={user?.uuid} md={4} sm={6}>
              <Card className={'w-100 p-5'}>
                <Card.Img
                  variant="top"
                  className="rounded-circle"
                  src={user?.imageUrl}
                />
                <Card.Body>
                  <Card.Title>{user?.login}</Card.Title>
                  <Card.Text>{user?.email}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )) || <></>}
        </Row>
      </Container>
    </BlockUi>
  );
};
