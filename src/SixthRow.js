import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';


function RowSix() {
  return (
    <div className="sixth-row"> 
        <Card className="price-plan">
      <Card.Body className="price-plan-body">
      <p className="pricing-plan"> Pricing plan</p>  
      </Card.Body>
    </Card>
 <Row className="row-4"> 
 <Col className="price-col">
    <Card className="price-cards">
    <div className="circle"></div>
      <Card.Body className="price-body">
        <Card.Title className="price-title">Essential</Card.Title>
        <Card.Text className="price-text">
          <p class="product-price"> $249/mo</p>  
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor sit amet</li>
            <li>Sanctus est Lorem</li>
            <li>At vero eos</li>
            <li>Dolores et ea </li>
            <li>Magna aliquyam era</li>
            <li>Sed diam nonumy</li>
          </ul>
        </Card.Text>
        <Button className="button2" >Choose plan</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className="price-col">
    <Card className="price-cards">
    <div className="circle2"></div>
      <Card.Body className="price-body">
        <Card.Title className="price-title">Premium</Card.Title>
        <Card.Text className="price-text">
          <p class="product-price"> $349/mo</p>  
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor sit amet</li>
            <li>Sanctus est Lorem</li>
            <li>At vero eos v1</li>
            <li>Dolores et ea </li>
            <li>Magna aliquyam era2.0</li>
            <li>Sed diam nonumy 2.0</li>
          </ul>
        </Card.Text>
        <Button className="button2" >Choose plan</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className="price-col">
    <Card className="price-cards">
    <div className="circle3"></div>
      <Card.Body className="price-body">
        <Card.Title className="price-title">Company</Card.Title>
        <Card.Text className="price-text">
          <p class="product-price"> $849/mo</p>  
          <ul>
            <li>Lorem Ipsum 2.0</li>
            <li>Dolor sit amet 2.0</li>
            <li>Sanctus est Lorem 2.0</li>
            <li>At vero eos v5</li>
            <li>Dolores et ea 2.0</li>
            <li>Magna aliquyam era Pro</li>
            <li>Sed diam nonumy Pro</li>
          </ul>
        </Card.Text>
        <Button className="button2" >Choose plan</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
</div>
       );
}

export default RowSix;
