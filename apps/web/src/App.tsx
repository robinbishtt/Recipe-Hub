import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

interface AppProps {
  appName: string;
}

const App: React.FC<AppProps> = ({ appName }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);



  const searchRecipes = async () => {
    
  };

  return (
    <div className="App">
      <Header title={appName} />
      
      <main>
        <section className="hero">
          <h1>Discover Amazing Recipes</h1>
          <p>Find, cook, and share delicious recipes from around the world</p>
        </section>

        <section className="search">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search recipes..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={searchRecipes} className="search-btn" disabled={loading}>
              {loading ? '⏳' : '🔍'}
            </button>
          </div>
        </section>


        <section className="submit-section">
          <h2>Share Your Recipe</h2>
          <p>Have a delicious recipe you'd like to share with the community?</p>
          <button className="submit-btn">Submit Recipe</button>
        </section>
      </main>
      
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;