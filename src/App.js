import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './SignUp';  // Import the SignUp component
import SignOut from './signout';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
import './App.css';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ESCA•LATE Travel Itineraries</h1>
          {user ? <SignOut /> : null}
        </header>
        <Routes>
          <Route path="/" element={user ? <Home /> : <SignIn />} />
          <Route path="/signup" element={<SignUp />} />  {/* Add the SignUp route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
