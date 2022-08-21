import React from 'react'
import "../styles/Header.css"

const Header = () => {
    return (
        <div className='header' >
            <a href="/" className="header-logo-link" >
                <img className="header-logo-img" src={require('../assets/flower-logo.png')} alt="flower-logo" />
                <span>FLOWWWER</span>
            </a>
            <span className="material-symbols-outlined ">
                menu
            </span>
            <ul className='header-nav'>
                <li className='header-nav-item'>
                    <a href='/'>SHOP</a>
                    <a href='/'>ABOUT US</a>
                    <a href='/'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Header