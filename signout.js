import React from 'react';
import { auth } from './firebase';

function SignOut() {
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        console.log('Signed out');
      })
      .catch(error => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
}

export default SignOut;
