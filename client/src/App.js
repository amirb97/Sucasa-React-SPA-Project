import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'about us',
      description: 'Welcome to Su Casa!'
    },
    {
      name: 'eat',
      description: 'Our take on modern dishes that capture the latin flavor!\nInspired by dishes and tastes from not just Mexico, but all of South America!',
    },
    {
      name: 'drink',
      description: 'Drink Menu',
    },
    { 
      name: 'gallery',
       description: 'Enjoy images of our food, drinks, and dining area!'
    },
    {
      name: 'events',
      description: ''
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        
        
      ></Nav>
      <main>
            <Gallery currentCategory={currentCategory}></Gallery>
      </main>
      <Footer />
    </div>
  );
}

export default App;
