import React, { useState } from 'react';
import axios from 'axios';

const EditAccountForm = ({ user, onAccountUpdated }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { username, email };

    try {
      const response = await axios.put(`/api/users/${user.id}`, updatedUser);
      onAccountUpdated(response.data);
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
      <button type="submit">Update Account</button>
    </form>
  );
};

export default EditAccountForm;
