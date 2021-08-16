import { Fragment } from "react";

import Box from "components/Home/Box";

import "styles/pages/Home.css";

export default function Home() {
	return (
		<Fragment>
			<div className="row s-even">
				<Box type="vertical" image="images/male-model.png" title="Hombre" redirectTo="/productos/categoria/hombre" />
				<Box
					type="horizontal"
					image="images/male-female-model.png"
					title="Unisex"
					redirectTo="/productos/categoria/unisex"
				/>
				<Box type="vertical" image="images/female-model.png" title="Mujer" redirectTo="/productos/categoria/mujer" />
			</div>
		</Fragment>
	);
}
