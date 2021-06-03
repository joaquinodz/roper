import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render () {
        return (
            <header className="header">
                <a href="/">
                        <img src="../../images/logo-roper.svg" alt="" className="logo" />
                </a>
                
                <div className="line"></div>
                
                <form action="/search" method="POST" className="buscar">
                    <input type="search" name="search" id="search" placeholder="Buscar..." />
                </form>
                
                <div className="usuario">
                    <img src="../../images/user.png" style={{ "width": "100%" }} alt="" />
                    <div className="nologin">
                        <a href="/user/register"><h4>Registrarse</h4></a>
                        <a href="/user/login"><p>Ingresar</p></a>
                    </div>

                    <a href="/carrito"><img src="../../images/cart.png" alt="" className="cart" /></a>
                </div>
                
                <hr></hr>

                <nav className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                    </ul>
                </nav>

                <hr className="hr"></hr>
            </header>
        );
    }
}

export default Header;