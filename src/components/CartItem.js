import React from 'react';
import PropTypes from 'prop-types';

export default function CarItem(props) {
  const {
    expanded, quantity, name, price,
  } = props;

  return (
    <div
      className={expanded ? 'expanded' : null}
    >
      <div className='cart-item-details'>
        {`${quantity}x ${name}`}
      </div>
      <div className='cart-item-price'>
        {`${quantity * price}`}
      </div>
    </div>
  );
}

CarItem.propTypes = {
  expanded: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
