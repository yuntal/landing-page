import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function RowTwo() {
  return (
    <Container fluid className="second-row">
    <Row className="row-">
    <Col id="text-col">       
        <h1> Success starts with a great idea</h1>
        <p className="lorem-ipsem"> Lorem ipsum dolor sit amet. Et neque eveniet quo alias mollitia non iste obcaecati sit iusto saepe ex exercitationem quod! Est dolores omnis qui labore eveniet est assumenda harum sed eveniet totam aut quae modi</p>
        <Button className="button1" id="button1">Book meeting now</Button>
   </Col>
   <Col>
        <img className="tech" src="images/ai.png" alt="ai"></img>
  </Col>
    </Row>
    </Container>

  );
}

export default RowTwo;


 
