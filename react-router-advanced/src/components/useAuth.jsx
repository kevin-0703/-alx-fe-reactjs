import { useState } from "react";

// Very basic auth simulation
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login/logout
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
