import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='banner'>
            <div className='flex flex-col justify-center items-center h-screen p-5'>
                <h1 className='text-5xl md:text-9xl text-white font-neue tracking-wide text-center'>Hot, Spicy & Delicious</h1>
                <p className='text-3xl md:text-7xl text-white font-neue tracking-wide my-5 italic text-center'>We Serve Healthy food</p>
            </div>
        </header>
    );
};

export default Header;