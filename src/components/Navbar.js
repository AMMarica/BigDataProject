import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

import logo from '../images/logo.png'
import maps from '../images/googlemap.png';
import family from '../images/family.png'
import locations from '../images/locations.jpg'

import { Image } from 'react-bootstrap'

const Navbar = () => (
    <nav className="navbar">
        <Image src={logo} alt="logo" roundedCircle width={60} height={60} />
        <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/map"
        >
            <img src={maps} className="logo" alt="logo" />
            Map
    </NavLink>
        <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/family"
        >
            <img src={family} className="logo" alt="logo" />
            Family
    </NavLink>
        <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/locations"
        >
            <img src={locations} className="logo" alt="logo" />
            Your Locations
    </NavLink>
    </nav>
);

export default Navbar;