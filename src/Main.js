import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import FAQs from './pages/FAQ'


export default function Main() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home /> ;
        }
        if (currentPage === 'About') {
            return <About /> ;
        }
        if (currentPage === 'FAQs') {
            return <FAQs /> ;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio /> ;
        }
        return <Portfolio /> ;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return ( <
        div >
        <Navbar currentPage = { currentPage } handlePageChange = { handlePageChange }/>
         { renderPage() }
        </div>
    );
}
