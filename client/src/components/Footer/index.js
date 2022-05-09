import React from "react";
import { Link } from "react-router-dom";


import '../Header/Header.css';

const Footer = () => {
    
        return (
            <footer>
                <div className="nav-container">
                    <h1>&#8482; 2022 D.Zimmermann, E.Cano, M.Flemming, M.McKinney, G.Dringenburg</h1>
                    <Link as={Link} to="/contact"><h2>Contact Us</h2></Link>
                    
                </div>
            </footer>
        );
    }

export default Footer;
