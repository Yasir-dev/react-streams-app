import React from 'react';
import {Link} from 'react-router-dom';
import Authentication from "./Authentication";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Home</Link>
            <div className="right menu">
                <Link to="/" className="item">
                    My Streams
                </Link>
                <Authentication/>
            </div>
        </div>
    );
};

export default Header;