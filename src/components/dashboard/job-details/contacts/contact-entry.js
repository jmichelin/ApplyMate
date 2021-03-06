import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Button, Input, Card } from 'react-materialize';

const ContactEntry = (props) => {
  return (
    <Row>
      <Col s={6}>
        <Card>
          <div>{props.contact.firstName} {props.contact.lastName}</div>
          <div>{props.contact.jobTitle}</div>
          <div><Link to={`/home/dashboard/job/contacts/${props.contact.contactId}`}>Edit</Link></div>
          <Button onClick={() => props.deleteContact(props.contact.contactId)} icon="delete" />
        </Card>
      </Col>
    </Row>
  );
};

export default ContactEntry;
