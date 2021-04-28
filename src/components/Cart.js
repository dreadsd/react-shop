import React, { useState, useEffect } from 'react';
import PubSub from '../PubSub';
import CartItem from './CartItem';

export default function Cart() {
  const [items, setItems] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [counter, setCounter] = useState(0);

  const expandCart = () => {
    const list = document.getElementById('item-cart-items');
    const method = isExpanded ? 'remove' : 'add';
    Array.from(list.children).forEach((element) => element.classList[method]('expanded'));
    setIsExpanded((val) => !val);
  };
  const addToCart = (data) => {
    setItems((v) => {
      const oldItems = { ...v };
      oldItems[data.id] = [
        oldItems[data.id] ? oldItems[data.id][0] + 1 : 1,
        data,
      ];
      return oldItems;
    });
    setCounter((v) => v + 1);
  };
  const parseItems = () => {
    const parsed = [];
    Object.keys(items).forEach((key) => {
      parsed.push(
        <CartItem
          key={key}
          expanded={isExpanded}
          quantity={items[key][0]}
          name={items[key][1].name}
          price={items[key][1].price}
        />,
      );
    });
    return parsed;
  };

  useEffect(() => {
    PubSub.subscribe('add to cart', addToCart);
    return PubSub.unsubscribe.bind(PubSub, 'add to cart', addToCart);
  }, []);

  return (
    <div id='cart'>
      <div>{counter}</div>
      <div id='item-cart' onClick={expandCart}>
        <i className='gg-shopping-cart' />
      </div>
      <div id='item-cart-items'>
        {parseItems()}
      </div>
    </div>
  );
}
