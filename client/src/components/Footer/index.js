import React, { Component } from "react";

export class Footer extends Component {
    render() {
        return (
            <footer class="py-5 bg-dark">
                <section class="footer-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="fs-about"></div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6">
                                <div class="fs-widget">
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
