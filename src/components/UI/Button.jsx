import React from 'react';

const Button = ({children,type}) => {

    const className='button '+(type==='1'?'btn1':'btn2')
    console.log(className)
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default Button;