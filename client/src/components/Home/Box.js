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
			<article className={classes(`relative ${type}`)} style={{ backgroundImage: `url(${image})` }}>
				<Link to={redirectTo} className="bg-white uppercase text-center absolute w-full border-t border-b border-black">
					{title}
				</Link>
			</article>
		);
	}
}
