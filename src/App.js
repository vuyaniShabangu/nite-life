import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Home from './components/pages/Home/Home';
import OurStory from './components/pages/OurStory/OurStory';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
    };
  }

  render(){
  return (
    <div className="App">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Home">
                <Home />
              </Tab>
              <Tab eventKey="ourStory" title="Our Story">
                <OurStory />
              </Tab>
              <Tab eventKey="gallery" title="Gallery">
                <p>I've been wondering if after all this time you'd like to meet</p>
              </Tab>
              <Tab eventKey="gigGuide" title="Gig Guide">
                <p>To go over</p>
              </Tab>
            </Tabs>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
  }
}

export default App;
