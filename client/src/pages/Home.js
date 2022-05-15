import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Nav, Modal, Tab } from "react-bootstrap";
import SignUpForm from "../pages/SignupForm";

import "./Styles/Pages.css";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="wrapper">
        <div className="jumbotron-home">
          <h1>
            WORKOUT <span class="stroke-home">BUDDY</span>
          </h1>
          <h2>Get Organized. Train Hard. Stay Fit.</h2>
        </div>
        <div className="cta-contain">
          <Link onClick={() => setShowModal(true)}>
            <button>Get Started Today</button>
          </Link>
        </div>
      </div>
      {/* Modal for signup */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Tab.Container defaultActiveKey="signup">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default HomePage;
