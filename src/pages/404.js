import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Error = () => {

    const router=useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },2000)
    },[])
    return (
        <div>
            err
        </div>
    );
};

export default Error;