import * as React from 'react';
import { UsersManagement } from 'pages/Administration/UsersManagement';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { CarsManagement } from 'pages/Administration/cars-management/CarsManagement';

export const  AdminPage = () => {
  return (
    <Container className={'py-5'}>
      <Tab.Container defaultActiveKey="USERS">
        <Row>
          <Col md={2}>
            <Nav as="ul" className="flex-column nav-pills">
              <Nav.Item className="nav-item" as="li">
                <Nav.Link eventKey="USERS" className="nav-link py-2 px-4">
                  Users
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link eventKey="CARS" className="nav-link py-2 px-4">
                  Cars
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="ver-separator separator-solid px-8">
            <Tab.Content>
              <Tab.Pane eventKey="USERS">
                <UsersManagement />
              </Tab.Pane>
              <Tab.Pane eventKey="CARS">
                <CarsManagement />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};
