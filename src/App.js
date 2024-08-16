import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './SignUp';
import SignOut from './signout';
import ItineraryCard from './ItineraryCard';  // Import ItineraryCard component
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
            <Link to="/">Home</Link>
            <Link to="/trips">Trips</Link>
            <Link to="/support">Support</Link>
            {!user && <Link to="/signin">Login</Link>}
            {user && <SignOut />}
          </nav>
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

        {user && (
          <div className="welcome-message">
            <h2>Welcome back, Elijah! Where would you like to go next?</h2>
          </div>
        )}

        <div className="featured-itineraries">
          <ItineraryCard
            image="https://via.placeholder.com/300"
            title="La Quinta Inn by Wyndham"
            description="Costa Mesa / Newport Beach"
          />
          <ItineraryCard
            image="https://via.placeholder.com/300"
            title="Grand Canyon"
            description="Explore the breathtaking views"
          />
          {/* Add more ItineraryCard components as needed */}
        </div>
      </div>
    </Router>
  );
}

export default App;
