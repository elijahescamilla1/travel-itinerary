import React from 'react';
import axios from 'axios';

const DeleteAccountButton = ({ userId, onAccountDeleted }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/users/${userId}`);
      onAccountDeleted();  // Redirect or update UI after deletion
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Account</button>
  );
};

export default DeleteAccountButton;
