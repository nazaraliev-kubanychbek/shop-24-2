import React from 'react';
import { Link } from 'react-router-dom';
import './geader.css';
import { useSelector } from 'react-redux';


export default function Header() {
  const categories = useSelector(s => s.reducer.categories);
  return (
    <header className='header'>
      <div className="container header-container">
        <h1 className='header-logo'>
          <Link to={'/'}>Shop</Link>
        </h1>
        <nav className='header-nav'>
          {
            categories.map((item) =>{
              return   <Link to={`/category/${item}`} key={item}>{item}</Link>
            })
          }
        </nav>
        <nav className='header-nav'>
          <Link to={'/cart'} className='cart-link'>
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
