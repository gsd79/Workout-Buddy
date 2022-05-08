import React, { Component } from "react";

export class Footer extends Component {
    render() {
        return (
            <footer className="py-5 bg-dark">
                <section className="footer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="fs-about"></div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="fs-widget">
                                    <ul>
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        {/* <li>
                                            <a href="#">Diary</a>
                                        </li> */}

                                        <li>
                                            <a href="#">+</a>
                                        </li>
                                        <li>
                                            <a href="/progress">Progress</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}
export default Footer;
