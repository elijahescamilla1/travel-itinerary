import React, { useState } from 'react';
import axios from 'axios';

const CreateAccountForm = ({ onAccountCreated }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password };

    try {
      const response = await axios.post('/api/users', newUser);
      onAccountCreated(response.data);  // Update the parent component if needed
      setUsername('');  // Clear form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
