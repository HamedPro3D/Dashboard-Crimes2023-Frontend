import React, { useEffect, useState } from 'react';

const TotalCrimeCount = () => {
  const [totalCrimeCount, setTotalCrimeCount] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:5000/get_total_crime_count')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setTotalCrimeCount(data[0].Total_Delitos);
        })
        .catch(error => {
          console.error('Error fetching total crime count:', error);
        });
    };

    // Fetch data initially
    fetchData();

    // Fetch data every 5 minutes (300,000 milliseconds)
    const intervalId = setInterval(fetchData, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="total-crime-count-container" style={{ textAlign: 'right', paddingRight: '20px' }}>
      <div className="total-crime-count">
        <h2 style={{ fontSize: '40px', color: 'black', fontFamily: 'Arial, sans-serif' }}>Total Crime Count</h2>
        {totalCrimeCount !== null ? (
          <p style={{ fontSize: '140px', color: '#950101', fontFamily: 'Arial, sans-serif' }}>
            <span style={{ fontWeight: 'bold' }}>{totalCrimeCount}</span>
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TotalCrimeCount;
