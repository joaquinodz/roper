import React, { Component } from 'react';

import logo from "../assets/images/logo-roper.svg";
import carrito from "../assets/images/cart.png";
import userAvatar from "../assets/images/user.png";

import '../styles/Header.css';

class Header extends Component {
    render () {
        return (
            <header>
                <a href="/"><img src={logo} alt="avatar" className="logo" /></a>
                <div className="line"></div>
                
                <form action="/search" method="POST" className="buscar">
                    <input type="search" name="search" id="search" placeholder="Buscar..." />
                </form>
                
                <div class="usuario">
                    <img src={userAvatar} alt="avatar" />
                    <div className="nologin">
                        <a href="/user/register"><h4>Registrarse</h4></a>
                        <a href="/user/login"><p>Ingresar</p></a>
                    </div>

                    <a href="/carrito"><img src={carrito} alt="carrito" className="cart" /></a>
                </div>
                
                <hr></hr>

                <nav className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                    </ul>
                </nav>

                <hr></hr>

             </header>
        );
    }
}

export default Header;