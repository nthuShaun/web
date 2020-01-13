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
/*eslint-disable*/
import React, { Fragment } from "react";

// reactstrap components
import { Container, Button, Col, Row } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/water.jpg") + ")"
        }}
        
      >

        <div className="align-top">
          <Container>
            <Row>
              <Col>
                <Button
                  className="btn-round mr-1"
                  color="warning"
                  type="button"
                  onClick={() => {location.href="/landing-page"}}
                >
                  實齋
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn-round mr-1"
                  color="warning"
                  type="button"
                >
                  仁齋
                </Button>
              </Col>
            </Row>

          </Container>
        </div>
        <div
          
        />
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            />
          </a>
        </h6>
      </div>
    </>
  );
}



export default IndexHeader;
