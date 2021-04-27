import React, { useState } from 'react';
import PubSub from '../PubSub';

export default function Cart() {
  const [items, setItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const expandCart = () => {
    const list = document.getElementById('item-cart-items');
    const method = isExpanded ? 'remove' : 'add';
    Array.from(list.children).forEach((element) => element.classList[method]('expanded'));
    setIsExpanded((val) => !val);
  };
  const addToCart = (obj) => {
    setItems([...items, obj]);
  };

  PubSub.subscribe('add to cart', addToCart);

  return (
    <div id='cart'>
      <div id='item-cart' onClick={expandCart}>
        <i className='gg-shopping-cart' />
      </div>
      <div id='item-cart-items'>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={isExpanded ? 'expanded' : null}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
