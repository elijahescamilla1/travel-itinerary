import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './signin';
import SignOut from './signout';
import SignUpPage from './SignUpPage'; // Import the new signup page component
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
import './App.css';

// Import the new components
import CreateAccountForm from './components/CreateAccountForm';
import AccountDetails from './components/AccountDetails';
import EditAccountForm from './components/EditAccountForm';
import DeleteAccountButton from './components/DeleteAccountButton';

function App() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

  const handleAccountCreated = (newUser) => {
    setUserData(newUser);
  };

  const handleAccountUpdated = (updatedUser) => {
    setUserData(updatedUser);
  };

  const handleAccountDeleted = () => {
    setUserData(null);  // Clear user data or redirect
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ESCA•LATE Travel Itineraries</h1>
          <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/trips">Trips</Link>
            <Link to="/support">Support</Link>
            {!user && <Link to="/signup">Sign Up</Link>}
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
          <Route path="/signup" element={<SignUpPage />} />  {/* Updated to use the new signup page */}
          {/* Routes for account management */}
          <Route 
            path="/create-account" 
            element={<CreateAccountForm onAccountCreated={handleAccountCreated} />} 
          />
          <Route 
            path="/account" 
            element={
              userData ? (
                <>
                  <AccountDetails userId={userData.id} />
                  <EditAccountForm user={userData} onAccountUpdated={handleAccountUpdated} />
                  <DeleteAccountButton userId={userData.id} onAccountDeleted={handleAccountDeleted} />
                </>
              ) : (
                <SignIn />
              )
            } 
          />
        </Routes>

        {user && (
          <div className="welcome-message">
            <h2>Welcome back, Elijah! Where would you like to go next?</h2>
          </div>
        )}

        <div className="featured-itineraries">
          <div className="itinerary-card">
            <img src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-06/VC_Experiences_LaQuinta_RF_170007135.jpg" alt="Destination" />
            <h3>La Quinta</h3>
            <p>Palm Springs</p>
          </div>
          <div className="itinerary-card">
            <img src="https://media.cntraveler.com/photos/57e2a876fd86274a1db91b62/16:9/w_2560,c_limit/Exterior-LaQuintaResortandClub-CA-CRHotel.jpg" alt="Destination" />
            <h3>La Quinta Resort & Club</h3>
            <p>Explore the breathtaking mountain views</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
