import ReactResponsiveSlider from 'test-responsive-slider'
import './App.css';
import 'test-responsive-slider/dist/index.css'

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row tag="main" className="bg-dom-black text-white">
          <Col tag="header" xs='12' className="p-0">
            <h1 className="text-center p-3">Domestika Blog</h1>
            <div className="hero">
              <div className="hero-content text-center">
                <h2>Sample Title for hero</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nostrum.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row tag="section" className="my-3">
          <Col xs="12" lg="8" tag="article" className="post-content">
            <Card className="shadow border rounded">
              <CardBody className="d-flex flex-wrap">
                <CardTitle tag="h2" className="text-center mb-3 w-100 order-md-1">Post title</CardTitle>
                <p className="order-md-3 floating-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ratione eos dicta illum magnam harum modi magni repudiandae quam totam?
                <br /><br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ratione, veniam voluptatibus ex suscipit nemo dolorum maxime aut sequi cupiditate!
                <br /><br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ratione, veniam voluptatibus ex suscipit nemo dolorum maxime aut sequi cupiditate!
                </p>
                <div className="slider-wrapper order-md-2 mb-3">
                  <ReactResponsiveSlider controls/>
                </div>
                
                {/*
                  <img className="order-md-2 mb-3" src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_429,q_auto,w_991/v1611591695/home-hero-covers/es/000/000/070/70-original.png?1611591695" alt="" />*/
                }
                <p className="order-md-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ratione eos dicta illum magnam harum modi magni repudiandae quam totam?
                <br /><br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ratione, veniam voluptatibus ex suscipit nemo dolorum maxime aut sequi cupiditate!
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col tag="aside" lg="4" className="d-none d-lg-block">
            <Card className="shadow border border-rounded">
              <CardBody>
                <CardTitle tag="h2" className="text-center mb-3">Aside Heading</CardTitle>
                <ListGroup>
                  <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row tag="footer" className="border-top bg-default-gray">
          <Col xs="12">
            <h3 className="text-center p-3">Blog footer</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
