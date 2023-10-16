// components/SignUp.js
// Apply similar styles to the Login component
import React, { useState } from "react";
import "./AuthForm.css"; // Import the CSS file for styling

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Implement user registration logic (e.g., validation, error handling)
    const user = { username, password };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
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
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
