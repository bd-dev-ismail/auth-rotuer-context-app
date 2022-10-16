import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handalSignOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
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

            <Link className="btn btn-ghost normal-case text-xl" to="/register">
              Register
            </Link>

            {user?.email && <span>Welcome {user.email}</span>}
            {user?.email ? (
              <Link
                onClick={handalSignOut}
                className="btn btn-ghost btn-sm normal-case text-xl"
                to="/register"
              >
                Log Out
              </Link>
            ) : (
              <Link className="btn btn-ghost normal-case text-xl" to="/login">
                LogIn
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;