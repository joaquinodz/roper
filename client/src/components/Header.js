import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "assets/images/logo-roper.svg";
import carrito from "assets/images/cart.png";
import userAvatar from "assets/images/user.png";

// Wraps all CSS module classes in a function so that i can use them without compromising code readability
import style from "styles/components/Header/Header.module.css";
import classLister from "css-module-class-lister";
const classes = classLister(style);

export default class Header extends Component {
	render() {
		return (
			<header>
				<div className={classes("row s-around")} style={{ marginTop: "2rem" }}>
					<div className={classes("col")} style={{ textAlign: "center" }}>
						<Link to="/">
							<img src={logo} alt="avatar" className={classes("logo")} />
						</Link>
					</div>

					<div className={classes("col")}>
						<form action="/search" method="POST" className={classes("buscar")}>
							<input type="search" name="search" id="search" placeholder="Buscar..." />
						</form>
					</div>

					{/* <- Ingresar/Registrarse  *avatar* -> */}
					<div className={classes("col")}>
						<div className={classes("row")}>
							<div className={classes("col")}>
								<div className="nologin">
									<Link to="/user/register">
										<h4>Registrarse</h4>
									</Link>
									<Link to="/user/login">
										<p>Ingresar</p>
									</Link>
								</div>
							</div>

							<div className={classes("col")}>
								<img src={userAvatar} alt="avatar" id={classes("avatar")} />
							</div>

							<div className={classes("col")}>
								<Link to="/carrito">
									<img src={carrito} alt="carrito" id={classes("cart")} />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className={classes("row s-even upper-lower-border")}>
					<nav id={classes("menu")}>
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
