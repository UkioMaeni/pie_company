import Image from 'next/image';
import React from 'react';
import codeImg from '@/assets/3.jpg'
import photoImg from '@/assets/photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFontAwesome,faTelegram,faAmazon } from '@fortawesome/free-brands-svg-icons'
const Body = () => {
    return (
        <div className='body'>
            <div className='body_title'>PieCompany</div>
            <div className='body_start'>Start 19.02.2023</div>
            <div className='flex'>
                <div className='body_about'><span className='pie-decore'>_Pie_</span> Product you have been waiting for. We implement many approaches to improve quality and create to meet your needs. Our products:</div>
                <ul className='prodact'>
                    <li className='prodact_el'><strong className='border'>PieDiagrams npm-package:</strong> package Nodejs for dynamic-changing data for charts.</li>
                    <li className='prodact_el'><strong className='border'>Piechat:</strong> Virtual chat for real-time communication! Currently supported on platforms: Android, Web</li>
                    <li className='prodact_el'><strong className='border'>PieDiary:</strong>Analogue todoList. Helper for people of all ages! With it, you can schedule the tasks you need to complete or use as a notepad or tips.</li>
                </ul>
                <div className='seporator'></div>
                <div className='body_title'>Authors</div>
                <div className='author'>
                    <div className='author_item'>
                        <Image src={photoImg}  className='author_img' />
                            <div  className='author_name'>Kate Lobova</div>
                            <div className='author_work'>Web-developer</div>
                            <div>
                            <FontAwesomeIcon icon={faTelegram} className='dd'/>
                            <FontAwesomeIcon icon={faTwitter} className='dd'/>
                            </div>
                        
                    </div>
                    <div className='author_item'>
                        <Image src={photoImg}  className='author_img' />
                            <div  className='author_name'>Type Script</div>
                            <div className='author_work'>Godness</div>
                            <div>
                            <FontAwesomeIcon icon={faTelegram} className='dd'/>
                            <FontAwesomeIcon icon={faTwitter} className='dd'/>
                            <FontAwesomeIcon icon={faFontAwesome} className='dd'/>
                            </div>
                        
                    </div>
                    <div className='author_item'>
                        <Image src={photoImg}  className='author_img' />
                            <div  className='author_name'>Victor Assebler</div>
                            <div className='author_work'>Web-developer</div>
                            <div className='author_work'>Designer</div>
                            <div>
                            <FontAwesomeIcon icon={faTelegram} className='dd'/>
                            <FontAwesomeIcon icon={faAmazon} className='dd'/>
                            <FontAwesomeIcon icon={faTwitter} className='dd'/>
                            </div>
                        
                    </div>
                    <div className='author_item'>
                        <Image src={photoImg}  className='author_img' />
                            <div  className='author_name'>Mihail Nazarov-Rebrend</div>
                            <div className='author_work'>Team-lead</div>
                            <div></div>
                        
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Body;