import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <>
            <header className='w-full sticky top-0 z-50 bg-base-200 shadow-md shadow-slate-300'>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 md:container mx-auto my-4 md:my-6 min-h-[calc(100vh-460px)] md:min-h-[calc(100vh-340px)]'>
                <Outlet></Outlet>
            </main>
            <footer className='bg-neutral text-neutral-content px-3 py-8 md:p-10'>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;