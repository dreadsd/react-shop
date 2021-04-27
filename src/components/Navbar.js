import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cart from './Cart';

export default function Navbar(props) {
  const { sources } = props;
  const { pathname } = useLocation();
  const links = sources.map((link) => {
    const { url, name } = link;
    return (
      <NavLink
        to={url}
        key={url}
        isActive={() => pathname === url}
      >
        {name}
      </NavLink>
    );
  });

  return (
    <nav>
      <div className='logo'>
        <a href='/'>LOGO</a>
      </div>
      <div className='links'>
        {links}
      </div>
      <Cart />
    </nav>
  );
}

Navbar.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
