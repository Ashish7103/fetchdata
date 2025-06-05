import { useState } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatFact = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch a cat fact. Try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Random Cat Fact</h1>
      <button onClick={fetchCatFact} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Cat Fact'}
      </button>
      {fact && <p className="fact">{fact}</p>}
    </div>
  );
}

export default App;