import React, { useContext, useState } from 'react';
import { UserContext } from './userContext';

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);
  const [name, setName] = useState('User');

  return (
    <nav>
      <h1>App</h1>

      {user ? (
        <>
          <h3>Welcome, {user.name}!</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => login(name)}>Login</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
