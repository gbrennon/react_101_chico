import React from 'react';
import './App.css';

import ProductList, { Product } from './components/ProductList';

function App() {
    const products: Product[] = [
      {id: 1, name: 'Tinta', price: 15.00},
      {id: 2, name: 'Parafuso', price: 1.00},
      {id: 3, name: 'Tomada', price: 10.00},
      {id: 4, name: 'Prego', price: 1.00},
  ]

  return (
    <div className="App">
      <div id="main">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
