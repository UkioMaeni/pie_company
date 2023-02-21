import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from './UI/Button';

const navItems=[
    {title:'Home',path:'/'},
    {title:'About',path:'/about'},
    {title:'LogIn',path:'/login'},
    {title:'SignIn',path:'/signin'}
]

const NavBar = () => {
    const {pathname}=useRouter()
    console.log(pathname)
    return (
        <div className='navbar'>
            {navItems.map((el,i)=>(
                <Link href={el.path} key={i}>
                    <Button type={i===3?'2':'1'}>{el.title}</Button>
                </Link>
            ))}
           
        </div>
    );
};

export default NavBar; 