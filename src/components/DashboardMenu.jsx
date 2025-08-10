import React from 'react';
import { NavLink } from 'react-router';
import "./DashboardMenu.css"
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlinePadding } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const DashboardMenu = () => {
    return (
        <ul className="menu rounded-box w-full text-center md:space-y-2">
            <li><NavLink to="/dashboard/add-marathon" className="dash-menu-navs"><MdOutlineAddCircleOutline/> Add Marathon</NavLink></li>
            <li><NavLink to="/dashboard/my-marathons" className="dash-menu-navs"><MdOutlinePadding/> My Marathons</NavLink></li>
            <li><NavLink to="/dashboard/my-applied-marathons" className="dash-menu-navs"><IoCheckmarkDoneCircleOutline/> My Applied Marathons</NavLink></li>
        </ul>
    );
};

export default DashboardMenu;