import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => { // Object destructuring to extract totalCounters from Props
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#ciao">Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
        </nav> 
    );
}

export default NavBar;