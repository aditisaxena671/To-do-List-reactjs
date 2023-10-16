// components/Login.js
import React, { useState } from "react";
import "./AuthForm.css"; // Import the CSS file for styling

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Fetch the user data from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Find the user with the provided username
    const user = users.find((u) => u.username === username);

    if (user && user.password === password) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
