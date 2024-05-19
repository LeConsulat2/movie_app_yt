import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  { name: 'fries', image: 'https://example.com/fries.jpg' },
  { name: 'burger', image: 'https://example.com/burger.jpg' },
  { name: 'ketchup', image: 'https://example.com/ketchup.jpg' },
  { name: 'pizza', image: 'https://example.com/pizza.jpg' }
];

function App() {
  return (
    <div>
      {foodILike.map((dish, index) => (
        <Food key={index} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
