import React, { Component } from 'react';

import logo from "../assets/images/logo-roper.svg";
import carrito from "../assets/images/cart.png";
import userAvatar from "../assets/images/user.png";

import "../styles/Header/Header.css";

export default class Header extends Component {
    render () {
        return (
            <header>
                <div className="row s-around" style={{marginTop: "2rem"}}>

                    <div className="col" style={{textAlign: "center"}}>
                        <a href="/"><img src={logo} alt="avatar" className="logo" /></a>
                    </div>

                    <div className="col">
                        <form action="/search" method="POST" className="buscar">
                            <input type="search" name="search" id="search" placeholder="Buscar..." />
                        </form>
                    </div>
                    
                    {/* <- Ingresar/Registrarse  *avatar* -> */}
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="nologin">
                                    <a href="/user/register"><h4>Registrarse</h4></a>
                                    <a href="/user/login"><p>Ingresar</p></a>
                                </div>
                            </div>

                            <div className="col">
                                <img src={userAvatar} alt="avatar" id="avatar"/>
                            </div>

                            <div className="col">
                                <a href="/carrito"><img src={carrito} alt="carrito" id="cart" /></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row s-even upper-lower-border">
                    <nav id="menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/productos">Productos</a></li>
                            <li><a href="/nosotros">Nosotros</a></li>
                        </ul>
                    </nav>
                </div>
                
            </header>
        );
    }
}