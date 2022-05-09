import React from 'react';
import Navheader from '../Navbar/'
// import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    

    return (
        <header>
            <div className="nav-container">
                <a href="/"><h1>Workout Buddy</h1></a>
                <Navheader/>              
                
            </div>
        </header>
    );
};

export default Header;
