import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "styles/components/User/Form.css";

const LoginSchema = Yup.object().shape({
	email: Yup.string().email("Ingrese un correo electrónico válido").required("Este campo es requerido"),
	password: Yup.string().required("Debes ingresar una contraseña válida"),
});

function setErrorMessage(field, errors) {
	document.forms["login"].elements[field].setCustomValidity(errors[field]);
}

export default function LoginForm() {
	return (
		<Fragment>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={LoginSchema}
				onSubmit={(values) => {
					// same shape as initial values
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form method="POST" name="login">
						<span className="login100-form-title p-b-26">Ingresar a la cuenta</span>

						{/* Email Field */}
						<div className="wrap-input100 validate-input">
							<Field className="input100" type="email" name="email" />
							<span className="focus-input100" data-placeholder="Correo electrónico"></span>
							{touched.email && errors.email && setErrorMessage("email", errors)}
						</div>

						{/* Password Field */}
						<div className="wrap-input100 validate-input">
							<Field className="input100" type="password" name="password" />
							<span className="focus-input100" data-placeholder="Contraseña"></span>
							{touched.password && errors.password && setErrorMessage("password", errors)}
						</div>

						{/* Submit Form Button */}
						<div className="container-login100-form-btn">
							<div className="wrap-login100-form-btn">
								<div className="login100-form-bgbtn"></div>
								<button className="login100-form-btn">Ingresar</button>
							</div>
						</div>

						<div className="text-center p-t-115">
							<span className="txt1">¿No tienes una cuenta? </span>
							<Link to="/register" className="txt2">
								¡Hazte una!
							</Link>
						</div>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
