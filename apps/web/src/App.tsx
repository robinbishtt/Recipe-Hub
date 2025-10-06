import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import Header from './components/Header';
import Footer from './components/Footer';
import GreetUser from './components/GreetUser';
import MealPlannerDashboard from './components/MealPlannerDashboard';

interface AppProps {
  appName: string;
}

const App: React.FC<AppProps> = ({ appName }) => {
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<string>('home');

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'meal-planner':
        return <MealPlannerDashboard />;
      case 'home':
      default:
        return (
          <main>
            <GreetUser name="Alice" />
            <p>Current Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">🍲 New Feature: Meal Planner!</h2>
              <p className="text-gray-700 mb-4">
                Plan your weekly meals, generate shopping lists, and track nutrition - all in one place!
              </p>
              <button 
                onClick={() => setCurrentPage('meal-planner')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Meal Planner
              </button>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="App">
      <Header title={appName} />
      
      {/* Simple Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-6 py-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 rounded-md ${currentPage === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('meal-planner')}
              className={`px-3 py-2 rounded-md ${currentPage === 'meal-planner' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
            >
              🍽️ Meal Planner
            </button>
          </div>
        </div>
      </nav>

      {renderCurrentPage()}
      
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;