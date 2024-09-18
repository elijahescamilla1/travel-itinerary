import React, { useEffect, useState } from 'react';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if JWT token is stored in localStorage
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome to the Home Page</h1>
          {/* Add more content for logged-in users here */}
        </>
      ) : (
        <>
          <h1>Please Sign In</h1>
          {/* You can add a redirect to the login page or display the login form directly here */}
        </>
      )}
    </div>
  );
}

export default Home;
