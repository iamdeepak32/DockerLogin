import React, { useState } from 'react';
import Form from './components/Form';
import UserContainer from './components/UserContainer';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <Form addUser={addUser} />
      {users.map((user) => (
        <UserContainer key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;