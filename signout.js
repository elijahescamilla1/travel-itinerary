import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

function SignOut() {
  return (
    auth.currentUser && (
      <button onClick={() => signOut(auth)}>Sign Out</button>
    )
  );
}

export default SignOut;