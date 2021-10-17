import { Fragment } from "react";

import Box from "components/Home/Box";

import maleModel from "assets/images/male-model.png";
import femaleModel from "assets/images/female-model.png";
import unisexModel from "assets/images/male-female-model.png";

export default function Home() {
	return (
		<Fragment>
			<div className="flex flex-row flex-wrap justify-evenly">
				<Box type="vertical" image={maleModel} title="Hombre" redirectTo="/productos/categoria/hombre" />
				<Box type="horizontal" image={unisexModel} title="Unisex" redirectTo="/productos/categoria/unisex" />
				<Box type="vertical" image={femaleModel} title="Mujer" redirectTo="/productos/categoria/mujer" />
			</div>
		</Fragment>
	);
}
