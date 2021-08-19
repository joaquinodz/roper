import React, { Component } from "react";
import { Link } from "react-router-dom";

// Wraps all CSS module classes in a function so that i can use them without compromising code readability
import style from "styles/components/Home/Box.module.css";
import classLister from "css-module-class-lister";
const classes = classLister(style);

export default class Box extends Component {
	render() {
		const { type, image, title, redirectTo } = this.props;
		return (
			<article className={classes(`${type} col center`)} style={{ backgroundImage: `url(${image})` }}>
				<Link to={redirectTo}>{title}</Link>
			</article>
		);
	}
}
