import React, { useState } from 'react';

export default function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  if (!isToggled) {
    return (
      <div className="nav">
        <i onClick={handleToggle} className='fa-solid fa-bars'></i>
      </div>
    );
  } else {
    return (
      <div className='nav modal-on'>
        <i className='hidden fa-solid fa-bars'></i>
        <h3 onClick={handleToggle}>Burger</h3>
        <ul onClick={handleToggle}>
          <NavList nav={nav} />
        </ul>
        <div onClick={handleToggle} className="overlay"></div>
      </div>
    );
  }
}

function NavText(props) {
  return <li>{props.text}</li>;
}

function NavList(props) {
  const nav = props.nav;
  return (
    <ul>
      {nav.map(navItem =>
        <NavText key={navItem.id}
          text={navItem.text}
        />
      )}
    </ul>
  );
}

const nav = [
  { id: 1, text: 'McDonald\'s' },
  { id: 2, text: 'Burger King' },
  { id: 3, text: 'In-N-Out' }
];
