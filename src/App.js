import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './SignUp';
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
          <nav className="navigation">
            <a href="/">Home</a>
            <a href="/trips">Trips</a>
            <a href="/support">Support</a>
          </nav>
          {user ? <SignOut /> : null}
        </header>
        
        <div className="search-bar">
          <input type="text" placeholder="Where to?" />
          <input type="date" />
          <input type="text" placeholder="Travelers" />
          <button>Search</button>
        </div>

        <Routes>
          <Route path="/" element={user ? <Home /> : <SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <div className="featured-itineraries">
          <div className="itinerary-card">
            <img src="example.jpg" alt="Destination" />
            <h3>Destination Name</h3>
            <p>Description</p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </Router>
  );
}

export default App;
