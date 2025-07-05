import React, { useEffect, useState } from 'react';
// ... baaki components import karo

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <h1>Website is Under Process...</h1>
        </div>
      ) : (
        <>
          <Header />
          {/* baaki sections yahan */}
        </>
      )}
    </>
  );
}

export default App;
