import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Travel Itinerary</h1>
          {user ? <SignOut /> : <SignIn />}
        </header>
        <Routes>
          <Route path="/" element={user ? <Home /> : <SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
