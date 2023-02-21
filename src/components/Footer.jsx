import Image from 'next/image';
import React from 'react';
import pieLogo from '../assets/PieLogo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_cr'>
                <Image src={pieLogo} className='pie-logo_footer'/>
                <div className='body_start'>2023 © PieCompany </div>
            </div>  
            <div className='footer_title'>
                <div className='footer_column'>
                    <div className='nav'>Navigation</div>
                    <div className='nav_el'>Docs</div>
                    <div className='nav_el'>Package</div>
                    <div className='nav_el'>Author</div>
                    
                </div>
                <div className='footer_column'>
                    <div className='nav'>link</div>
                    <div className='nav_el'>GitHub</div>
                </div>
                <div className='footer_column'>
                    <div className='nav'>Feedback</div>
                    <div className='nav_el'>e-mail</div>
                    <div className='nav_el'>telegram</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;