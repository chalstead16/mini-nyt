import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <Link to='/'style={{color:"#000000", textDecoration:"none"}}>
      <h1>mini nyt</h1>
      </Link>
    </div>
  )
}

export default Header;