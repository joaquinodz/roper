import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "components/User/LoginForm";

import "styles/pages/User.css";

export default class User extends Component {
	render() {
		return (
			<div className="container">
				<div className="col half">
					{/* Form wrapper */}
					<div class="limiter">
						<div class="container-login100">
							<div class="wrap-login100">
								<Router basename="/user">
									<Switch>
										<Route path="/login">
											<LoginForm />
										</Route>
									</Switch>
								</Router>
							</div>
						</div>
					</div>
					{/* END - Form wrapper */}
				</div>
				<div className="col half bg"></div>
			</div>
		);
	}
}
