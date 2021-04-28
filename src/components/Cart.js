import React, { useState, useEffect } from 'react';
import PubSub from '../PubSub';

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
    setCounter((v) => {
      const received = { ...data };
      setItems((v1) => {
        const oldItems = { ...v1 };
        received.id = v;
        oldItems[data.id] = (oldItems[data.id] || []).concat(received);
        return oldItems;
      });
      return v + 1;
    });
  };
  const parseItems = () => {
    const parsed = [];
    Object.keys(items).forEach((key) => {
      items[key].forEach((item) => {
        parsed.push(
          <div id={item.id} key={item.id} className={isExpanded ? 'expanded' : null}>{item.name}</div>,
        );
      });
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
