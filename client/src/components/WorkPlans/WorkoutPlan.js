import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap"; //Jumbotron is not supported?
import pic from "../../assets/img/banner-bg.jpg";


export class WorkoutPlan extends Component {
  render() {
    return (
      <>
        {/* <Jumbotron
          class="banner-section set-bg"
          data-setbg="./img/banner-bg.jpg"
        > */}

        <img src={pic} />
        <Container class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="bs-text service-banner">
                <h2>Exercise until the body obeys.</h2>
                <div class="bt-tips">
                  Where health, beauty and fitness meet.
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div class="plan-section service-plan spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title">
                  <h1>Choose Your Workout Plan</h1>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-8">
                <Nav class="ps-item">
                  <br></br>
                  <Nav.Link as={Link} to="/plans">
                    EASY
                  </Nav.Link>
                  <br></br>

                  <ul style="list-style: none;">
                    <li>Pectorals</li>
                    <li>Abs</li>
                    <li>Glutes</li>
                    <li>Tricepts</li>
                    <li>Quads</li>
                    <li>Upper Back</li>
                  </ul>
                  <a href="#" class="primary-btn plan-btn">
                    Enroll now
                  </a>
                  <a href="#" class="">
                    <i class="fa fa-picture-o"></i>
                  </a>
                </Nav>
              </div>
              <div class="col-lg-4 col-md-8">
                <Nav class="ps-item">
                  <br></br>
                  <Nav.Link as={Link} to="/plans">
                    INTERMEDIATE
                  </Nav.Link>
                  <br></br>

                  <ul style="list-style: none;">
                    <li>Pectorals</li>
                    <li>Abs</li>
                    <li>Glutes</li>
                    <li>Tricepts</li>
                    <li>Quads</li>
                    <li>Upper Back</li>
                  </ul>
                  <a href="#" class="primary-btn plan-btn">
                    Enroll now
                  </a>
                  <a href="#" class="">
                    <i class="fa fa-picture-o"></i>
                  </a>
                </Nav>
              </div>
              <div class="col-lg-4 col-md-8">
                <Nav class="ps-item">
                  <br></br>
                  <Nav.Link as={Link} to="/plans">
                    DIFFICULT
                  </Nav.Link>
                  <br></br>
                  <ul style="list-style: none;">
                    <li>Pectorals</li>
                    <li>Abs</li>
                    <li>Glutes</li>
                    <li>Tricepts</li>
                    <li>Quads</li>
                    <li>Upper Back</li>
                  </ul>
                  <a href="#" class="primary-btn plan-btn">
                    Enroll now
                  </a>
                  <a href="#" class="">
                    <i class="fa fa-picture-o"></i>
                  </a>
                </Nav>
              </div>
            </div>
          </div>
        </div>
        {/* </Jumbotron> */}
      </>
    );
  }
}

export default WorkoutPlan;
