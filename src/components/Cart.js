import React from 'react';

export default function Cart() {
  const expandCart = () => {
    const list = document.getElementById('item-cart-items');
    Array.from(list.children).forEach((element) => element.classList.toggle('expanded'));
  };

  return (
    <div id='cart'>
      <div id='item-cart' onClick={expandCart}>
        <i className='gg-shopping-cart' />
      </div>
      <div id='item-cart-items'>
        <p>HELLO</p>
      </div>
    </div>
  );
}
