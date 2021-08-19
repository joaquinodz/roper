import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Header from "components/Header";
import Footer from "components/Footer";
import User from "pages/User";

import "styles/App.css";

export default class App extends Component {
	render() {
		return (
			<Router>
				{/* A <Switch> looks through its children <Route>s
            		and renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/">
						<Header />
						<Home />
						<Footer />
					</Route>

					<Route path="/user">
						<User />
					</Route>

					{/* Error 404 */}
					<Route path="*">
						<Header />
						<p className="flex center">La ruta solicitada no existe.</p>
						<Footer />
					</Route>
				</Switch>
			</Router>
		);
	}
}
