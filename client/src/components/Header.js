import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "assets/images/logo-roper.svg";
import carrito from "assets/images/cart.png";
import userAvatar from "assets/images/user.png";

// Wraps all CSS module classes in a function so that i can use them without compromising code readability
import "styles/components/Header/Header.module.css";

export default class Header extends Component {
	render() {
		return (
			<header className="flex flex-col flex-wrap mt-6 mb-6">
				<div className="flex flex-row flex-wrap justify-around mt-8">
					<div className="flex flex-col text-center">
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>

					<div className="flex flex-col">
						<form action="/search" method="POST">
							<input type="search" name="search" placeholder="Buscar..." />
						</form>
					</div>

					{/* <- Ingresar/Registrarse  *avatar* -> */}
					<div className="flex flex-col">
						<div className="flex flex-row">
							<div className="flex flex-col">
								<Link to="/user/register">
									<h4>Registrarse</h4>
								</Link>
								<Link to="/user/login">
									<h4>Ingresar</h4>
								</Link>
							</div>

							<div className="flex flex-col">
								<img src={userAvatar} alt="avatar" className="w-8 m-4" />
							</div>

							<div className="flex flex-col">
								<Link to="/carrito">
									<img src={carrito} alt="carrito" className="w-8 m-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<nav className="flex flex-row border-t border-b border-black">
					<ul className="flex justify-evenly items-center uppercase w-full">
						<li className="list-none p-2">
							<Link to="/">Inicio</Link>
						</li>
						<li className="list-none p-2">
							<Link to="/productos">Productos</Link>
						</li>
						<li className="list-none p-2">
							<Link to="/nosotros">Nosotros</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
