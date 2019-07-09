import React from 'react';
import './style.scss';

const history = [
  {
    pathname: '/',
    name: 'Home'
  },
  {
    pathname: '/about',
    name: 'About'
  }
];
function renderNav(pathname) {
  return history.map((item) => {
    const className = item.pathname === pathname ? 'current' : '';
    return (
      <a href={`#${item.pathname}`} className={className}>
        {item.name}
      </a>
    );
  });
}

export default function Header({ pathname }) {
  return <header className="header">{renderNav(pathname)}</header>;
}
