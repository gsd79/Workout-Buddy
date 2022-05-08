import React, { Component } from "react";
import { Container } from "react-bootstrap";//does not like jumbotron or card column
import pic from "../assets/img/hero/VideoClipPic.png";

export class Home extends Component {
  render() {
    return (
      <>
        {/* <Jumbotron class="hero-section"> */}
        <div>
          <Container className="hs-slider owl-carousel">
            <div>
            {/* <CardColumns
              class="hs-item set-bg"
              data-setbg="../src/assets/img/hero/hero-1.jpg"
            > */}
              <img src={pic} alt=''/>

              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-6">
                    <div className="hi-text">
                      <span>Shape your body</span>
                      <h1>
                        Be <strong>strong</strong> traning hard
                      </h1>
                      <a href="/plans" className="primary-btn">
                        Get info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </CardColumns> */}
          </Container>
        </div>
        {/* </Jumbotron> */}
      </>
    );
  }
}

export default Home;
