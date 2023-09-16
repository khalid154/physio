import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../mylogo.webp';

function NavigationBar() {
  const onMouseOver = event => {
    const el = event.target;
    el.style.background = "blue"
  };
  
  const onMouseOut = event => {
    const el = event.target;
    el.style.background = '#212529';
  };
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary" md={4} style={{ width: "100%" }}>
      <Container>
        <Navbar className="bg-body-tertiary" style={{ width: "50%" }}>
          <Container>
            <Navbar.Brand href="#home">
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
              {' '} tauseef physio clinic
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar>
          <Button as="a" variant="primary"> Book Appointment</Button>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home" md={2}>Home</Nav.Link>
            <Nav.Link href="#link" md={2}>About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" data-bs-theme="dark">
              <NavDropdown.Item href="#action/3.1" title="Services" id="basic-nav-dropdown" data-bs-theme="dark" onMouseEnter={event => onMouseOver(event)}
      onMouseOut={event => onMouseOut(event)}>Physical Therapy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" title="Services" id="basic-nav-dropdown" data-bs-theme="dark" onMouseEnter={event => onMouseOver(event)}
      onMouseOut={event => onMouseOut(event)}>Massage Therapy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" title="Services" id="basic-nav-dropdown" data-bs-theme="dark" onMouseEnter={event => onMouseOver(event)}
      onMouseOut={event => onMouseOut(event)}>Chiropractic Therapy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" title="Services" id="basic-nav-dropdown" data-bs-theme="dark" onMouseEnter={event => onMouseOver(event)}
      onMouseOut={event => onMouseOut(event)}>Work Injuries</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" title="Services" id="basic-nav-dropdown" data-bs-theme="dark" onMouseEnter={event => onMouseOver(event)}
      onMouseOut={event => onMouseOut(event)}>Clinical Pilates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" title="Services" id="basic-nav-dropdown" data-bs-theme="dark" onMouseEnter={event => onMouseOver(event)}
      onMouseOut={event => onMouseOut(event)}>Sport Injuries</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
