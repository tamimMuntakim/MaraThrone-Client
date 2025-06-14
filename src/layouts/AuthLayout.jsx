import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <>
            <header className='w-full sticky top-0 z-50 bg-base-200 shadow-md shadow-slate-300'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 md:container mx-auto'>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default AuthLayout;