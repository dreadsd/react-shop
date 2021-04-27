import React from 'react';
import Item from './Item';
import Products from '../products';

export default function Shop() {
  return (
    <div className='item-list'>
      {Products.map((item) => (
        <Item object={item} key={item.id} />
      ))}
    </div>
  );
}
