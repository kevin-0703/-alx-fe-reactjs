import { useState, useEffect } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("Form submitted", { username, email, password });
  };
  return (
    <form onSubmit={handlesubmit}>
      <h2>User registration</h2>

      {error && <p>{error}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e.target.value}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
export default RegistrationForm;
