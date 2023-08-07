import React from 'react';
import { Card,  Row, Col } from 'react-bootstrap';


function RowThree() {
  return (
    <div className="third-row">
       <Row className="row" id="row">
        <Col>
        <Card>
      <Card.Body>
        <img className="icon" src="images/idea.png" alt="icon"></img>
        <Card.Title>The Idea</Card.Title>
        <p> convallis cras varius, dictumst nec commodo primis senectus pulvinar fames platea fringilla.</p>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card id="card2">
      <Card.Body>
      <img className="icon" src="images/upstairs.png" alt="icon"></img>
        <Card.Title> Creating a game plan </Card.Title>
        <p> convallis cras varius, dictumst nec commodo primis senectus pulvinar fames platea fringilla.</p>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card id="card3">
      <Card.Body>
      <img className="icon" src="images/teacher.png" alt="icon"></img>
        <Card.Title>Launch your business</Card.Title>
        <p> convallis cras varius, dictumst nec commodo primis senectus pulvinar fames platea fringilla.</p>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RowThree;
