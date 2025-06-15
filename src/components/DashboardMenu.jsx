import React from 'react';
import { NavLink } from 'react-router';
import "./DashboardMenu.css"

const DashboardMenu = () => {
    return (
        <ul className="menu rounded-box w-full text-center md:space-y-2">
            <li><NavLink to="/dashboard/add-marathon" className="dash-menu-navs">Add Marathon</NavLink></li>
            <li><NavLink to="/dashboard/my-marathons" className="dash-menu-navs">My Marathons</NavLink></li>
            <li><NavLink to="/dashboard/my-applied-marathons" className="dash-menu-navs">My Applied Marathons</NavLink></li>
        </ul>
    );
};

export default DashboardMenu;