import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './signin';
import SignOut from './signout';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>ESCA•LATE Travel Itineraries</h1>
        </header>
        <main className="App-main">
          {user ? <SignOut /> : <SignIn />}
          <Routes>
            <Route path="/" element={user ? <Home /> : <SignIn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
