import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Button } from 'react-bootstrap';
import RowTwo from './SecondRow';
import RowThree from './ThirdRow';
import RowFour from './FourthRow';
import RowFive from './FifthRow';
import RowSix from './SixthRow';
import {RowSeven} from './SeventhRow';

function App() {
  return (
    <>
    <div className="first-row">
    <Navbar expand="lg">
      <Container className="con">
        <Navbar.Brand href="#home"><Image className='logo' src="images/logo.png"></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active to="#home">Home</Nav.Link>
            <Nav.Link to="#">Prices</Nav.Link>
            <Nav.Link to="#">Inquiries</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="button">sign up</Button>
      </Container>
    </Navbar>
    </div>
    <RowTwo/>
    <RowThree/>
    <RowFour/>
    <RowFive/>
    <RowSix/>
    <RowSeven/>
    </>
  );
}

export default App;
