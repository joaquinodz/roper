import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
	name: Yup.string().required("Este campo es requerido"),
	surname: Yup.string().required("Este campo es requerido"),
	email: Yup.string().email("Ingrese un correo electrónico válido").required("Este campo es requerido"),
	password: Yup.string().required("Debes ingresar una contraseña válida"),
	confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
	image: Yup.string().required("Este campo es requerido"),
});

export default function Register() {
	return (
		<Fragment>
			<p class="text-center text-3xl">Bienvenido.</p>

			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={schema}
				onSubmit={(values) => {
					// same shape as initial values
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form method="POST" name="register" enctype="multipart/form-data">
						<div className="flex flex-col pt-4">
							<label for="name" className="text-lg">
								Nombres
							</label>
							<Field
								type="text"
								name="name"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
							/>
							<span className="text-red-400">{touched.name && errors.name}</span>
						</div>

						<div className="flex flex-col pt-4">
							<label for="surname" className="text-lg">
								Apellido
							</label>
							<Field
								type="text"
								name="surname"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
							/>
							<span className="text-red-400">{touched.surname && errors.surname}</span>
						</div>

						<div className="flex flex-col pt-4">
							<label for="email" className="text-lg">
								Correo Electrónico
							</label>
							<Field
								type="email"
								name="email"
								placeholder="tu@correo.com"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
							/>
							<span className="text-red-400">{touched.email && errors.email}</span>
						</div>

						<div className="flex flex-col pt-4">
							<label for="password" className="text-lg">
								Contraseña
							</label>
							<Field
								type="password"
								name="password"
								placeholder="Contraseña"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
							/>
							<span className="text-red-400">{touched.password && errors.password}</span>
						</div>

						<div className="flex flex-col pt-4">
							<label for="confirm_password" className="text-lg">
								Confirmar Contraseña
							</label>
							<Field
								type="password"
								name="confirm_password"
								placeholder="Contraseña"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
							/>
							<span className="text-red-400">{touched.confirm_password && errors.confirm_password}</span>
						</div>

						<div className="flex flex-col pt-4">
							<label for="image" className="text-lg">
								Foto de Perfil
							</label>
							<Field
								type="file"
								name="image"
								accept="image/*"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
							/>
							<span className="text-red-400">{touched.image && errors.image}</span>
						</div>

						<div className="flex flex-col">
							<button type="submit" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
								Enviar
							</button>
						</div>
					</Form>
				)}
			</Formik>

			<div className="text-center pt-12 pb-12">
				<p>
					¿Ya tienes una cuenta?{" "}
					<Link to="/login" className="underline font-semibold">
						¡Entra!
					</Link>
				</p>
			</div>
		</Fragment>
	);
}
