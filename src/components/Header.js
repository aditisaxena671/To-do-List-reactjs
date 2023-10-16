import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import a CSS file for styling

function Header({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="brand">
          <h1>To-do-List App</h1>
        </div>
        <div className="user-actions">
          {user ? (
            <div>
              <span className="welcome">Welcome, {user.username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/signup" className="signup-link">
                Sign Up
              </Link>
              <Link to="/login" className="login-link">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
