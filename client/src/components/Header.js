import React, { Component } from 'react';

import '../styles/Header.css';

class Header extends Component {
    render () {
        return (
            <header>
                <a href="/"><img src="./images/logo-roper.svg" alt="avatar" className="logo" /></a>
                <div className="line"></div>
                
                <form action="/search" method="POST" className="buscar">
                    <input type="search" name="search" id="search" placeholder="Buscar..." />
                </form>
                
                <div class="usuario">
                    <img src="./images/user.png" alt="avatar" />
                    <div className="nologin">
                        <a href="/user/register"><h4>Registrarse</h4></a>
                        <a href="/user/login"><p>Ingresar</p></a>
                    </div>

                    <a href="/carrito"><img src="./images/cart.png" alt="carrito" className="cart" /></a>
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