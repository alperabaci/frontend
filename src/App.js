import React from 'react';
import ProductList from './pages/ProductList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Product Listing</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default App;
