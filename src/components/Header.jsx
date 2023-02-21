import React from 'react';
import NavBar from './NavBar';
import pieLogo from '../assets/pieLogoLeft.png'
import Image from 'next/image';
const Header = () => {
    return (
        <header className='header'>
            <Image src={pieLogo} className='pie-logo'/>
            <NavBar/>      
        </header>
    );
};

export default Header;