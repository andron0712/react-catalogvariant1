import React from 'react';

function ProductCard(props) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '220px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      backgroundColor: '#fff'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#222' }}>{props.title}</h3>
      <p style={{ margin: '5px 0', fontSize: '14px', color: '#777' }}>Категорія: {props.category}</p>
      <p style={{ margin: '5px 0', fontSize: '18px', color: '#e74c3c', fontWeight: 'bold' }}>
        {props.price} грн
      </p>
    </div>
  );
}

export default ProductCard;
