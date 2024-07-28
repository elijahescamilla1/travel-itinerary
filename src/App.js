import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './signin';
import SignOut from './signout';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
import './SignIn.css';


function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Travel Itinerary</h1>
          {user ? <SignOut /> : null}
        </header>
        <Routes>
          <Route path="/" element={user ? <Home /> : <SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
