import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  pathname: PropTypes.string.isRequired,
};

const history = [
  {
    pathname: '/',
    name: 'Home',
  },
  {
    pathname: '/about',
    name: 'About',
  },
];
function renderNav(pathname) {
  return history.map((item) => {
    const className = item.pathname === pathname ? 'current' : '';
    return (
      <a key={item.pathname} href={`#${item.pathname}`} className={className}>
        {item.name}
      </a>
    );
  });
}

export default function Header({ pathname }) {
  return <header className="header">{renderNav(pathname)}</header>;
}

Header.propTypes = propTypes;
