import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#fafafa' }}>
      <Header />
      
      <main style={{ flex: '1', padding: '30px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <ProductCard title="Ноутбук" price="35000" category="Техніка" />
        <ProductCard title="Смартфон" price="18500" category="Гаджети" />
        <ProductCard title="Навушники" price="2400" category="Аудіо" />
        <ProductCard title="Монітор" price="8900" category="Техніка" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
