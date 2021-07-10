import React from 'react'
import '../../Global/Header/TopHeader.css'
import logo from '../../../img/logo.png'
import {
    FaRegEnvelope,
    FaRegBell,
    FaUserAlt,
    FaRegCheckCircle
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className="top__header">
        <div className="top__header-container">
            <Link to="/"><img src={logo} alt="" className="logo"/></Link>
            <ul className="top__header-right">
               <li> <FaRegEnvelope className="fas"/></li>
              <li>  <FaRegBell className="fas"/></li>
                <li><FaUserAlt className="fas"/></li>
               <li> <button className="btn connect__wallet-btn">Connect Wallet</button></li>
                <li><button className="btn vote-btn"><FaRegCheckCircle className="fa-check-btn"/> Vote</button></li>
            </ul>
        </div>
    </div>
    )
}

export default TopHeader
