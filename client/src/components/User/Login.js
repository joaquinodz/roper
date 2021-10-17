import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
	email: Yup.string().email("Ingrese un correo electrónico válido").required("Este campo es requerido"),
	password: Yup.string().required("Debes ingresar una contraseña válida"),
});

function setErrorMessage(field, errors) {
	document.forms["login"].elements[field].setCustomValidity(errors[field]);
}

export default function Login() {
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
					<Form method="POST" name="login">
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
							{touched.email && errors.email && setErrorMessage("email", errors)}
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
							{touched.password && errors.password && setErrorMessage("password", errors)}
						</div>

						<div className="flex flex-col">
							<button type="submit" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
								Entrar
							</button>
						</div>
					</Form>
				)}
			</Formik>

			<div className="text-center pt-12 pb-12">
				<p>
					¿No ténes una cuenta?{" "}
					<Link to="/register" className="underline font-semibold">
						¡Hazte una!
					</Link>
				</p>
			</div>
		</Fragment>
	);
}
