import React, { useState } from 'react';
// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Main Function
export default function Main() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home /> ;
        }
        if (currentPage === 'About') {
            return <About /> ;
        }
        if (currentPage === 'Resume') {
            return <Resume /> ;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio /> ;
        }
        if (currentPage === 'Contact') {
            return <Contact /> ;
        }
        return <Portfolio /> ;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Header currentPage = { currentPage } handlePageChange = { handlePageChange }/>
        <div className="main-content">
         { renderPage() }
         </div>
         <Footer />
        </div>
    );
}
