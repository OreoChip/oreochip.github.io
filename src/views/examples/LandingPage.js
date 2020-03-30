import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { motion } from "framer-motion";
import MotionOnViewport from "components/Utilities/MotionOnViewport";

// core components
import NavBar from "components/Navbars/NavBar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="4">
                <h2 className="title">Who we are?</h2>
              </Col>
              <Col style={{ padding: "30px 0" }} md="8">
                <h5 className="description">
                  Data and automation is our passion, and engineering systems to
                  build digital products is our expertise. We blend both data
                  engineering and machine learning to help our clients have
                  better insights!
                </h5>
              </Col>
            </Row>
            <div className="section section-team text-center">
              <Container>
                <div className="team">
                  <Row>
                    <Col md="3">
                      <MotionOnViewport
                        initial={{ x: -500, scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 1, type: "tween" }}
                      >
                        <div className="team-player">
                          <img
                            alt="..."
                            className="icon-wrapper img-fluid img-raised"
                            src={require("assets/img/data-analytics-icon.png")}
                          ></img>
                          <h4 className="title">Data Analytics</h4>
                          <p className="description">Details here</p>
                        </div>
                      </MotionOnViewport>
                    </Col>
                    <Col md="3">
                      <MotionOnViewport
                        initial={{ y: 500, scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ duration: 1, type: "tween" }}
                      >
                        <div className="team-player">
                          <img
                            alt="..."
                            className="icon-wrapper img-fluid img-raised"
                            src={require("assets/img/data-governance-icon.png")}
                          ></img>
                          <h4 className="title">Data Governance</h4>
                          <p className="description">Details here</p>
                        </div>
                      </MotionOnViewport>
                    </Col>
                    <Col md="3">
                      <MotionOnViewport
                        initial={{ y: 500, scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ duration: 1, type: "tween" }}
                      >
                        <div className="team-player">
                          <img
                            alt="..."
                            className="icon-wrapper img-fluid img-raised"
                            src={require("assets/img/data-integration-icon.png")}
                          ></img>
                          <h4 className="title">Data Integration</h4>
                          <p className="description">Details here</p>
                        </div>
                      </MotionOnViewport>
                    </Col>
                    <Col md="3">
                      <MotionOnViewport
                        initial={{ x: 500, scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 1, type: "tween" }}
                      >
                        <div className="team-player">
                          <img
                            alt="..."
                            className="icon-wrapper img-fluid img-raised"
                            src={require("assets/img/data-science-icon.png")}
                          ></img>
                          <h4 className="title">Data Science</h4>
                          <p className="description">Details here</p>
                        </div>
                      </MotionOnViewport>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
