import React from 'react';
import { useSelector, connect } from 'react-redux';


const NavBar = () => {
    const isLogged = useSelector(state => state.authReducer);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                <span className="nav-link">{isLogged ? 'Welcome back' : 'Please, log in'}</span>
            </div>
        </nav>
    );
}

export default connect(null, null)(NavBar);