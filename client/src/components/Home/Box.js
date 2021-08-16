import React, { Component } from "react";
import { Link } from "react-router-dom";

import "styles/components/Home/Box.css";

export default class Box extends Component {
	render() {
		const { type, image, title, redirectTo } = this.props;
		return (
			<article className={`${type} col center`} style={{ backgroundImage: `url(${image})` }}>
				<Link to={redirectTo} className="link">
					{title}
				</Link>
			</article>
		);
	}
}
