import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/marathons">Marathons</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>

    return (
        <nav className="w-11/12 md:container mx-auto navbar p-0 flex justify-between">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 py-2 gap-1 shadow-lg">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-lg md:text-2xl px-0 text-secondary font-bold"><img src="https://img.icons8.com/matisse/100/running.png" alt="running" className='w-[30px] md:w-[50px] h-auto hidden md:inline' />Mara<p className='-ml-2 text-primary '>Throne</p></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3 items-center">
                    {links}
                </ul>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
                {/* {user ?
                    (
                        <>
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                <div className="avatar avatar-online">
                                    <div className="w-7 md:w-9 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </a>
                            <Tooltip id="my-tooltip" />
                            <button onClick={handleLogout} className='btn btn-secondary text-white btn-sm md:btn-md md:font-bold md:w-[120px] '>Logout</button>
                        </>)
                    :
                    (
                        <Link to="/auth/login" className='btn btn-primary text-white btn-sm md:btn-md md:font-bold md:w-[120px] '>Login</Link>
                    )
                } */}
                <Link to="/auth/login" className='btn btn-secondary text-white btn-sm md:btn-md md:font-bold md:w-[120px] '>Login</Link>
            </div >
        </nav >
    );

};

export default Navbar;