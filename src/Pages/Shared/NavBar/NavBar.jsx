import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import './nav.css'
import { useState } from "react";
const NavBar = () => {
    const [show, setShow] = useState(false)

    const toggleBalance = (e) => {
        e.preventDefault();
        setShow(!show);

    };

    return (
        <div className="btm-nav nav bottom-5 shadow-lg w-11/12 h-[72px] rounded-xl max-w-[1200px] mx-auto ">
            <NavLink to={'/'}>
                <IoHomeOutline className="text-2xl"/>
                <span className="btm-nav-label">Home</span>
            </NavLink>
            <NavLink to={'Profile'} className={'flex flex-row gap-5'}>
                <div className="avatar ">
                    <div className="ring-black w-12 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="max-md:hidden">
                    <h1 className="font-bold max-md:text-sm ">MD. Shakhawat Hossain</h1>
                    <h1 onClick={toggleBalance} className="font-bold badge badge-outline">{show ? "5000 TK" : "Tap for Balance"}</h1>
                </div>
            </NavLink>
            <NavLink to={'statics'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="btm-nav-label">Statics</span>
            </NavLink>
        </div>
    );
};

export default NavBar;