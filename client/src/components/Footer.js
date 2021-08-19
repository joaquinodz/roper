import React, { Component } from "react";
import { Link } from "react-router-dom";

import "styles/Footer.module.css";

class Footer extends Component {
	render() {
		return (
			<footer>
				<ul>
					<li>
						<Link to="#">Términos · </Link>
					</li>
					<li>
						<Link to="#">· Privacidad ·</Link>
					</li>
					<li>
						<Link to="#">· Nosotros ·</Link>
					</li>
					<li>
						<Link to="#">· API ·</Link>
					</li>
					<li>
						<Link to="#">· Trabajos</Link>
					</li>
				</ul>
				<p>Ⓒ 2021 Roper, Inc.</p>
			</footer>
		);
	}
}

export default Footer;
