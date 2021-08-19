import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import formStyle from "styles/components/User/Form.module.css";
import userStyle from "styles/pages/User.module.css";

import LoginForm from "components/User/LoginForm";

// Wraps all CSS module classes in a function so that i can use them without compromising code readability
import classLister from "css-module-class-lister";
const formClasses = classLister(formStyle);
const userClasses = classLister(userStyle);

export default function User() {
	return (
		<div className={userClasses("container")}>
			<div className={userClasses("col half")}>
				{/* Form wrapper */}
				<div className={formClasses("limiter")}>
					<div className={formClasses("container-login100")}>
						<div className={formClasses("wrap-login100")}>
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
			<div className={userClasses("col half bg")}></div>
		</div>
	);
}
