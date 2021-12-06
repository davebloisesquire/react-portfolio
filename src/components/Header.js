import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header">
      <h1>Dave Blois Esq</h1>
      <Navbar currentPage = { currentPage } handlePageChange = { handlePageChange }/>
    </div>
  )
}

export default Header;
