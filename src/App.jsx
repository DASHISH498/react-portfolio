import React, { useEffect, useState } from 'react';
import Header from './Header';
import Mains from './Mains';

// import './App.scss'; // make sure your CSS is loaded here

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <h1>Website is Under Maintenance...</h1>
        </div>
      ) : (
        <>
          <Header />
          <Mains />
        </>
      )}
    </>
  );
}

export default App;
