import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  const { name, price } = props;
  return (
    <div className='item'>
      <div className='item-title'>{name}</div>
      <div className='item-image'>
        <img src='#' alt={name} />
      </div>
      <div className='item-price'>{price}</div>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
