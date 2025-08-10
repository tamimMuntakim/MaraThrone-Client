import React, { use } from 'react';
import { Link } from 'react-router';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';

const Footer = () => {

    const { user } = use(AuthContext);

    return (
        <footer className="footer sm:footer-horizontal w-11/12 md:container mx-auto">
            <aside className='space-y-1 md:space-y-2'>
                <Link to="/" className="text-lg md:text-2xl px-0 text-secondary font-bold flex items-center"><img src="https://img.icons8.com/matisse/100/running.png" alt="running" className='w-[25px] md:w-[40px] h-auto' />Mara<p className=' text-primary '>Throne</p></Link>
                <p className=''>Your all-in-one platform for seamless marathon planning and management.</p>
                <p className='text-slate-400'>Copyright © {new Date().getFullYear()} - All right reserved by MaraThrone Tech Ltd.</p>
                <nav className="flex flex-col gap-1 md:gap-2">
                    <Link className="link link-hover" to="/">Home</Link>
                    <Link className="link link-hover" to="/Marathons" >Marathons</Link>
                    {user && <Link className="link link-hover" to="/dashboard" >Dashboard</Link>}
                    <Link className="link link-hover" to="/about-us" >About Us</Link>
                    <Link className="link link-hover" to="/contact-us" >Contact Us</Link>
                </nav>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4 md:gap-8">
                    <a href="https://www.facebook.com/tamim.muntakim.02" target='_blank'><FaFacebookSquare className='w-4 h-4 md:w-6 md:h-6' /></a>
                    <a href="https://www.linkedin.com/in/tamim-muntakim-51052625a/" target='_blank'><FaLinkedin className='w-4 h-4 md:w-6 md:h-6' /></a>
                    <a href="https://github.com/tamimMuntakim" target='_blank'><FaGithub className='w-4 h-4 md:w-6 md:h-6' /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;