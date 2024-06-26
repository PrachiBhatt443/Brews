// src/components/Menu/Menu.jsx

import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    { id: 1, category: 'Espresso', name: 'Espresso', description: 'Strong and bold espresso shot.', price: '$3' },
    { id: 2, category: 'Latte', name: 'Caffe Latte', description: 'Smooth and creamy latte.', price: '$4' },
    { id: 3, category: 'Cappuccino', name: 'Cappuccino', description: 'Rich and foamy cappuccino.', price: '$4.5' },
    { id: 4, category: 'Espresso', name: 'Americano', description: 'Espresso diluted with hot water.', price: '$3.5' },
    { id: 5, category: 'Cold Brew', name: 'Cold Brew Coffee', description: 'Smooth and refreshing cold brew.', price: '$5' },
    { id: 6, category: 'Latte', name: 'Vanilla Latte', description: 'Latte with a hint of vanilla.', price: '$4.5' },
  ];

  const categories = ['All', 'Espresso', 'Latte', 'Cappuccino', 'Cold Brew'];

  const filteredMenuItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.title}>Our Menu</h1>
      <div className={styles.categoryContainer}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.itemsContainer}>
        {filteredMenuItems.map(item => (
          <div key={item.id} className={styles.menuItem}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span className={styles.price}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
