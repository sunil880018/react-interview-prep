import React, { createContext, useState } from 'react';
// createContext is a function used to create a Context object, which enables global state management

// Create the context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means logged out

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
