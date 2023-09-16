import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import House from 'bootstrap-icons/icons/house-fill.svg';
import Telephone from 'bootstrap-icons/icons/telephone-fill.svg';
import Message from 'bootstrap-icons/icons/envelope-fill.svg';
import Clock from 'bootstrap-icons/icons/clock-fill.svg';

function ContactBar() {
  return (
    <Container>
      <Row style={{alignItems : "center"}}>
        <Col xs={12} md={3} style={{marginTop : "10px", borderBottom: "2px solid #bfbfbf "}} >
          <Row>
            <Col xs={2} style={{alignContent:"center"}}>
              <img src={House} width="35" height="35" className="d-inline-block align-center" />
            </Col>
            <Col xs = {10}>
              <Row><b>Visit our Location</b></Row>
              <Row style={{margin:"0"}}> phulwari shareef, patna</Row>
            </Col>
          </Row>
        </Col>

        {/* <a href="tel:7979998510" style={{color:"inherit", textDecoration: "none"}} > */}
        <Col xs={12} md={3} style={{marginTop:"10px", borderBottom: "2px solid #bfbfbf"}}>
        <a href="tel:7979998510" style={{textDecoration: "none", color: "inherit"}}>
          <Row>
            <Col xs={2}>
              <img src={Telephone} width="35" height="35" className="d-inline-block align-center" />
            </Col>
            <Col xs = {10}>
              <Row><b>Give us a Call</b></Row>
              <Row style={{margin:"0"}}> +(91) - 7979998510</Row>
            </Col>
          </Row>
          </a>
        </Col>

        <Col xs={12} md={3} style={{marginTop:"10px", borderBottom: "2px solid #bfbfbf "}}>
          <Row>
            <Col xs={2}>
              <img src={Message} width="35" height="35" className="d-inline-block align-center" />
            </Col>
            <Col xs = {10}>
              <Row><b>Send us a Message</b></Row>
              <Row style={{margin:"0"}}> tauseef@gmail.com</Row>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={3} style={{marginTop:"10px", borderBottom: "2px solid #bfbfbf "}}>
          <Row>
            <Col xs={2}>
              <img src={Clock} width="35" height="35" className="d-inline-block align-center" />
            </Col>
            <Col xs = {10}>
              <Row><b>Opening Hours</b></Row>
              <Row style={{margin:"0"}}>Mon - Fri : 8AM - 5PM</Row>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
    // </Navbar>
  );
}

export default ContactBar;
