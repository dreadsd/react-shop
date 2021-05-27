import React, { useState, useEffect } from 'react';
import PubSub from '../PubSub';
import CartItem from './CartItem';

export default function Cart() {
  const [items, setItems] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

  const expandCart = (e) => {
    if (!e.code || e.code === 'Enter') {
      const list = document.getElementById('item-cart-items');
      const method = isExpanded ? 'remove' : 'add';
      Array.from(list.children).forEach((element) => element.classList[method]('expanded'));
      setIsExpanded((val) => !val);
    }
  };
  const addToCart = (data) => {
    let price;
    setItems((v) => {
      const oldItems = JSON.parse(JSON.stringify(v));
      price = +data.price;
      if (oldItems[data.id]) {
        oldItems[data.id][0] += 1;
      } else {
        oldItems[data.id] = [1, data];
      }
      return oldItems;
    });
    setTotal((v) => v + price);
    setCounter((v) => v + 1);
  };
  const removeFromCart = (id) => {
    let price;
    setItems((v) => {
      const oldItems = JSON.parse(JSON.stringify(v));
      price = +oldItems[id][1].price;
      if (oldItems[id][0] <= 1) {
        delete oldItems[id];
      } else {
        oldItems[id][0] -= 1;
      }
      return oldItems;
    });
    setTotal((v) => v - price);
    setCounter((v) => v - 1);
  };
  const parseItems = () => {
    const parsed = [];
    Object.keys(items).forEach((key) => {
      parsed.push(
        <CartItem
          key={key}
          quantity={items[key][0]}
          object={items[key][1]}
          expanded={isExpanded}
        />,
      );
    });
    return parsed;
  };

  useEffect(() => {
    PubSub.subscribe('add to cart', addToCart);
    PubSub.subscribe('remove from cart', removeFromCart);
    return () => {
      PubSub.unsubscribe.bind(PubSub, 'add to cart', addToCart);
      PubSub.unsubscribe.bind(PubSub, 'remove from cart', removeFromCart);
    };
  }, []);

  return (
    <div id='cart'>
      <div id='item-cart' tabIndex='0' onClick={expandCart} onKeyPress={expandCart}>
        <div>{counter}</div>
        <i className='gg-shopping-cart' />
      </div>
      <div id='item-cart-items'>
        {parseItems()}
        <div id='total-price'>
          Total: $
          {total}
        </div>
      </div>
      <hr />
    </div>
  );
}
