/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div id="dorm-1" className="section text-center">
          <Container>
            <h3 className="title">實齋</h3>
            <hr className="underline" />
              <br />
              <br />
              <Row>
                <Col md="3">
                  <div className="info">
                    <img src={require("assets/img/dormitory/washicon_3.png")}
                      alt={"washing-machine"}
                      className="washing-machine"
                      height="100%" width="100"
                    />
                    <div className="description">
                      <h4 className="info-title">剩餘時間: 0分鐘</h4>
                      
                      <Button className="btn-link" color="info" href="#pablo">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <img src={require("assets/img/dormitory/washicon_1.png")}
                      alt={"washing-machine"}
                      className="washing-machine"
                      height="100%" width="100"
                    />
                    <div className="description">
                      <h4 className="info-title">剩餘時間: 0分鐘</h4>
                      <Button className="btn-link" color="info" href="#pablo">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <img src={require("assets/img/dormitory/washicon_4.png")}
                      alt={"washing-machine"}
                      className="washing-machine"
                      height="100%" width="100"
                    />
                    <div className="description">
                      <h4 className="info-title">剩餘時間: 0分鐘</h4>
                      <Button className="btn-link" color="info" href="#pablo">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <img src={require("assets/img/dormitory/washicon_2.png")}
                      alt={"washing-machine"}
                      className="washing-machine"
                      height="100%" width="100"
                    />
                    <div className="description">
                      <h4 className="info-title">剩餘時間: 0分鐘</h4>
                      <Button className="btn-link" color="info" href="#pablo">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        <div id="dorm-2" className="section text-center">
          <Container>
            <h3 className="title">仁齋</h3>
            <hr className="underline" />
              <br />
              <br />
              <Row>
                <Col md="3">
                  <div className="info">
                    <img src={require("assets/img/dormitory/washicon_3.png")}
                      alt={"washing-machine"}
                      className="washing-machine"
                      height="100%" width="100"
                    />
                    <div className="description">
                      <h4 className="info-title">剩餘時間: 0分鐘</h4>
                      
                      <Button className="btn-link" color="info" href="#pablo">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <img src={require("assets/img/dormitory/washicon_1.png")}
                      alt={"washing-machine"}
                      className="washing-machine"
                      height="100%" width="100"
                    />
                    <div className="description">
                      <h4 className="info-title">剩餘時間: 0分鐘</h4>
                      <Button className="btn-link" color="info" href="#pablo">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <img src={require("assets/img/dormitory/washicon_4.png")}
                      alt={"washing-machine"}
                      className="washing-machine"
                      height="100%" width="100"
                    />
                    <div className="description">
                      <h4 className="info-title">剩餘時間: 0分鐘</h4>
                      <Button className="btn-link" color="info" href="#pablo">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <img src={require("assets/img/dormitory/washicon_2.png")}
                      alt={"washing-machine"}
                      className="washing-machine"
                      height="100%" width="100"
                    />
                    <div className="description">
                      <h4 className="info-title">剩餘時間: 0分鐘</h4>
                      <Button className="btn-link" color="info" href="#pablo">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        <div id="about" className="section section-dark text-center">
          <Container>
            <h3 className="title">我們是誰</h3>
	    <hr className="underline" />
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={require("assets/img/default-avatar.png")} alt="..."></img>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={require("assets/img/default-avatar.png")} alt="..."></img>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={require("assets/img/default-avatar.png")} alt="..."></img>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                     
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="contact" className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
