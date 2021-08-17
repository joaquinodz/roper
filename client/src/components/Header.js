import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "assets/images/logo-roper.svg";
import carrito from "assets/images/cart.png";
import userAvatar from "assets/images/user.png";

import "styles/components/Header/Header.css";

export default class Header extends Component {
	render() {
		return (
			<header>
				<div className="row s-around" style={{ marginTop: "2rem" }}>
					<div className="col" style={{ textAlign: "center" }}>
						<Link to="/">
							<img src={logo} alt="avatar" className="logo" />
						</Link>
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
									<Link to="/user/register">
										<h4>Registrarse</h4>
									</Link>
									<Link to="/user/login">
										<p>Ingresar</p>
									</Link>
								</div>
							</div>

							<div className="col">
								<img src={userAvatar} alt="avatar" id="avatar" />
							</div>

							<div className="col">
								<Link to="/carrito">
									<img src={carrito} alt="carrito" id="cart" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="row s-even upper-lower-border">
					<nav id="menu">
						<ul>
							<li>
								<Link to="/">Inicio</Link>
							</li>
							<li>
								<Link to="/productos">Productos</Link>
							</li>
							<li>
								<Link to="/nosotros">Nosotros</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
