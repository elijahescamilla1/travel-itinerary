import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home'; // Import your Home component or any other components

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
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
