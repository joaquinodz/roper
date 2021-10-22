import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "assets/images/logo-roper.svg";
import loginBackground from "assets/images/login-bg.jpg";

import Login from "components/User/Login";
import Register from "components/User/Register";

export default function User() {
	return (
		<main className="bg-white font-family-karla h-screen">
			<div className="w-full flex flex-wrap">
				{/* Left Column */}
				<div className="w-full md:w-1/2 flex flex-col">
					<div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
						<Link to="/" className="">
							<img src={logo} alt="logo" />
						</Link>
					</div>

					<div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
						<Router basename="/user">
							<Switch>
								<Route path="/login">
									<Login />
								</Route>
								<Route path="/register">
									<Register />
								</Route>
							</Switch>
						</Router>
					</div>
				</div>

				{/* Right Column */}
				<div class="w-1/2 shadow-2xl">
					<img className="object-cover w-full h-screen hidden md:block" alt="foto" src={loginBackground} />
				</div>
			</div>
		</main>
	);
}
