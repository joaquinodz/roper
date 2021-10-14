import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
	render() {
		return (
			<footer className="flex flex-col flex-wrap justify-around bg-black h-24 mt-12 fixed inset-x-0 bottom-0">
				<ul className="flex justify-center flex-wrap mt-2 uppercase">
					<li className="list-none">
						<Link to="#" className="text-white">
							Términos ·{" "}
						</Link>
					</li>
					<li className="list-none">
						<Link to="#" className="text-white">
							· Privacidad ·
						</Link>
					</li>
					<li className="list-none">
						<Link to="#" className="text-white">
							· Nosotros ·
						</Link>
					</li>
					<li className="list-none">
						<Link to="#" className="text-white">
							· API ·
						</Link>
					</li>
					<li className="list-none">
						<Link to="#" className="text-white">
							· Trabajos
						</Link>
					</li>
				</ul>
				<p className="text-white mb-0 text-center">Ⓒ 2021 Roper, Inc.</p>
			</footer>
		);
	}
}

export default Footer;
