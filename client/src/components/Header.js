import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render () {
        return (
            <header>

                {/* Logo + Linea que lo separa con la barra de búsqueda */}
                <div className="logo__line">
                    <a href="/">
                        <img src="./images/logo-roper.svg" alt="" className="logo" />
                    </a>

                    <div className="line"></div>
                </div>

                {/* Barra de Busqueda */}
                <form action="/search" method="POST" className="buscar">
                    <input type="search" name="search" id="search" placeholder="Buscar..." />
                </form>
                
                {/* Iniciar Sesion - Registrarse - Avatar */}
                {/* TODO: Convertir en componente */}
                <div className="usuario">
                    <img src="./images/user.png" alt="avatar" />
                    <div className="nologin">
                        <a href="/user/register"><h4>Registrarse</h4></a>
                        <a href="/user/login"><p>Ingresar</p></a>
                    </div>

                    <a href="/carrito"><img src="../../images/cart.png" alt="carrito" className="cart" /></a>
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