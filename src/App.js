import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
            <Link to="/trips">Trips</Link>
            <Link to="/support">Support</Link>
            {!user && (
              <form className="signin-form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
              </form>
            )}
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
          <div className="itinerary-card">
            <img src="https://via.plachttps://media.cntraveler.com/photos/57e2a876fd86274a1db91b62/16:9/w_2560,c_limit/Exterior-LaQuintaResortandClub-CA-CRHotel.jpgeholder.com/300" alt="Destination" />
            <h3>La Quinta Inn by Wyndham</h3>
            <p>Costa Mesa / Newport Beach</p>
          </div>
          <div className="itinerary-card">
            <img src="https://https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-06/VC_Experiences_LaQuinta_RF_170007135.jpg.placeholder.com/300" alt="Destination" />
            <h3>Grand Canyon</h3>
            <p>Explore the breathtaking views</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
