import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1>Header</h1>
      <Navbar currentPage = { currentPage } handlePageChange = { handlePageChange }/>
    </div>
  )
}

export default Header;
