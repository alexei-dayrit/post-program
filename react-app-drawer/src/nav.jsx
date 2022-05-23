import React from 'react';

export default function NavList(props) {
  const nav = props.nav;
  return (
    <ul>
      {nav.map(navItem =>
        <li key={navItem.id}>
          {navItem.text}
        </li>
      )}
    </ul>
  );
}
