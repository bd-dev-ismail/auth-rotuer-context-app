import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <div className="navbar bg-primary text-primary-content ">
          <div className="container mx-auto">
            <Link className="btn btn-ghost normal-case text-xl">
              Auth Rotuer Context App
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">
              LogIn
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Header;