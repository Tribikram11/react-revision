import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './component/ProductList';
import CartSummary from './component/CartSummary';


export default function App() {
  return (
    <CartProvider>
      <div>
        <h1>Product Search & Cart</h1>
        
        <div >
          <ProductList />
          <CartSummary/>
        </div>
      </div>
    </CartProvider>
  );
}