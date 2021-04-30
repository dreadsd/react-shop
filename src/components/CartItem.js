import React from 'react';
import PropTypes from 'prop-types';
import PubSub from '../PubSub';

export default function CarItem(props) {
  const { quantity, object, expanded } = props;

  const removeOne = () => {
    PubSub.publish('remove from cart', object.id);
  };

  return (
    <div
      className={expanded ? 'expanded' : null}
    >
      <table>
        <tbody>
          <tr onClick={removeOne}>
            <td className='cart-item-details'>{`${quantity}x ${object.name}`}</td>
            <td className='cart-item-price'>{`$${quantity * object.price}`}</td>
            <td><i className={`${object.icon} ${object.icon}-small`} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

CarItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  object: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
};
