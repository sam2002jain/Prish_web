import React from 'react';
import { Link } from "react-router-dom";
import logosvg from "../Logo/logo.svg";
import './style.css';

const Hamburger = () => {
   
    return (
        <div className="hamburger-menu">

                <ul className="menu-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/reach">Reach us</Link></li>
                <li>
                    <ul><Link to="/services">Services</Link>
                    <li  className='servi'><Link to="/corporation">Corporation</Link></li>
                    <li className='servi'><Link to="/corporate">Corporate Consultancy</Link></li>
                    <li className='servi'><Link to="/bookkeeping">Bookkeeping & Accounting</Link></li>
                    <li className='servi'><Link to="/taxation">Taxation</Link></li>
                    <li className='servi'><Link to="/audit">Audit</Link></li>
    
                
                    </ul>
                </li>
                </ul>

        </div>
        
    );
};

export default Hamburger;
