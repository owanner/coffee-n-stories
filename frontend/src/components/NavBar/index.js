import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { MdSearch, MdAccountCircle, MdKeyboardArrowDown } from "react-icons/md";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function NavBar() {
    const history = useHistory('')

    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="bar">
            <div className="left">
                <img src={logoImg} alt="coffe 'n' stories" />
                <p> coffee 'n' stories </p>
            </div>
            <div className="right">
                <div className="search">
                    <input type="seacrh" placeholder="buscar" />
                    <a className="search" href="search">
                        <MdSearch size={40} color="#c4c4c4" />
                    </a>
                </div>

                <div className="dropdown">
                    <MdAccountCircle size={40} color="#9a0007" />
                    <MdKeyboardArrowDown size={40} color="#9a0007" />
                    <div className="dropdown-content">
                        <Link to="/profile">seu perfil</Link>
                        <Link to="/compose">escreva</Link>
                        <Link to="/help">ajuda</Link>
                        <Link onClick={handleLogout} id="logout" to="/">sair</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}