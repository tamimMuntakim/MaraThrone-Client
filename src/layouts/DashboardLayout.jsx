import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardMenu from '../components/DashboardMenu';

const DashboardLayout = () => {
    return (
        <>
            <header className='w-full sticky top-0 z-50 bg-base-200 shadow-md shadow-slate-300'>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 md:container mx-auto md:h-[calc(100vh-150px)] md:grid md:grid-cols-8 md:gap-4'>
                <aside className=' md:col-span-2 flex justify-center bg-secondary text-white'>
                    <div className="md:h-full md:sticky top-[calc(64px)] md:flex md:items-center w-full">
                        <DashboardMenu></DashboardMenu>
                    </div>
                </aside>
                <div className='md:col-span-6 md:h-full md:overflow-y-auto'>
                    <Outlet></Outlet>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default DashboardLayout;