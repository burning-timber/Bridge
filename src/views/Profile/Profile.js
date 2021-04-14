import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { useAuth0 } from "../../react-auth0-spa";
import EditableLabel from 'react-inline-editing';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const namespace = 'https://bridge.burningtimber.com/';
  let badges = [];
  for (const role of user[namespace + 'roles']) {
    badges.push(<span className="badge badge-primary align-top">{role}</span>);
  }
  
  let user_metadata = user[namespace + 'user_metadata'];
  
  return (
    <div className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <EditableLabel labelClassName="h2" text={name}/>
          <EditableLabel className="lead" text={email}/>
          {badges}
        </Col>
      </Row>
      <Row>
        <Col md>
          {JSON.stringify(user_metadata, null, 2)}
        </Col>
        
      </Row>
    </div>
  );
};

export default Profile;
