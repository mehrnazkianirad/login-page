// Import
import { useState } from "react";// Hook for managing state
import axios from "axios";// Library for making HTTP requests

// Loginform component
const LoginForm = () => {

// State variables
  const [username, setUsername] = useState("");// Stores the entered username
  const [password, setPassword] = useState("");// Stores the entered password

 // `handleSubmit` function
  const handleSubmit = (e) => {
    e.preventDefault();// Prevent default form submission

    const response = axios.post("/api/login", {// Send a POST request to the `/api/login` endpoint
      username,
      password,
    });

    if (response.status === 200) {// Check if the response status is 200 (success)
      window.location.href = "/home";// Redirect to the `/home` page

    } else {// If the response status is not 200

      alert("Invalid username or password")// Display an error message
    }
  };

  return (
    <div className="login-form">
      <div className="username">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" type="submit" onClick={handleSubmit}>Login
      </button>
    </div>
  );
};

export default LoginForm;