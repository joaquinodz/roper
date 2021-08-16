import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Header from "components/Header";
import Footer from "components/Footer";

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

					{/* Error 404 */}
					<Route>
						<Header />
						<p className="flex center">La ruta solicitada no existe.</p>
						<Footer />
					</Route>
				</Switch>
			</Router>
		);
	}
}
