import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

interface RecipeFormData {
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  prepTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const SubmitRecipe: React.FC = () => {
  const [formData, setFormData] = useState<RecipeFormData>({
    title: '',
    category: '',
    ingredients: [''],
    instructions: '',
    prepTime: '',
    difficulty: 'medium'
  });

  const categories = [
    'Italian',
    'Indian',
    'Chinese',
    'Mexican',
    'American',
    'Mediterranean',
    'Japanese',
    'Thai',
    'French',
    'Vegetarian'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to submit recipe
    console.log('Recipe submitted:', formData);
  };

  return (
    <div className="submit-recipe">
      <Header title="Submit New Recipe" />
      <main className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-4">
            <label className="block mb-2">Recipe Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Difficulty</label>
            <select
              value={formData.difficulty}
              onChange={(e) => setFormData({...formData, difficulty: e.target.value as RecipeFormData['difficulty']})}
              className="w-full p-2 border rounded"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Recipe
          </button>
        </form>
      </main>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default SubmitRecipe;