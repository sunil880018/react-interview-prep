import React, { useContext } from 'react';
import { UserContext } from './userContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard">
      {user ? (
        <>
          <h2>This is your dashboard</h2>
        </>
      ) : (
        <>
          <h2>Please login to access your dashboard </h2>
        </>
      )}
    </div>
  );
};

export default Dashboard;
