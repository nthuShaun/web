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
import { Button, Container, Row, Col } from "reactstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/dormitory/renzai.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
      <div className="filter" />
      <Container className="container-fluid text-center">
        <Row>
          <Col>
            <AnchorLink href="#dorm-1" target="_self">
              <div className="border rounded-circle m-auto service-box" style={{backgroundColor: 'rgba(255,255,255,0.75)'}}>
                <img src={require("assets/img/dormitory/dormicon_1.png")}
                  className="dormitary"
                  height="55%" width="auto"
                />			
                <h4 className="dorm-text">仁齋</h4>
              </div>
            </AnchorLink>
          </Col>
          <Col>
            <AnchorLink href="#dorm-2" target="_self">
              <div className="border rounded-circle m-auto service-box" style={{backgroundColor: 'rgba(255,255,255,0.75)'}}>
                <img src={require("assets/img/dormitory/dormicon_3.png")}
                  className="dormitary"
                  height="55%" width="auto"
                />
                <h4 className="dorm-text">實齋</h4>
              </div>
            </AnchorLink>
          </Col>
        </Row>
      </Container>
</div>
</>
  );
}

export default LandingPageHeader;
