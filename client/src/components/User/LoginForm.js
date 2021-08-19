import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Wraps all CSS module classes in a function so that i can use them without compromising code readability
import style from "styles/components/User/Form.module.css";
import classLister from "css-module-class-lister";
const classes = classLister(style);

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email("Ingrese un correo electrónico válido")
		.required("Este campo es requerido"),
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
				onSubmit={values => {
					// same shape as initial values
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form method="POST" name="login">
						<span className={classes("login100-form-title p-b-26")}>Ingresar a la cuenta</span>

						{/* Email Field */}
						<div className={classes("wrap-input100 validate-input")}>
							<Field className={classes("input100")} type="email" name="email" />
							<span className={classes("focus-input100")} data-placeholder="Correo electrónico" />
							{touched.email && errors.email && setErrorMessage("email", errors)}
						</div>

						{/* Password Field */}
						<div className={classes("wrap-input100 validate-input")}>
							<Field className={classes("input100")} type="password" name="password" />
							<span className={classes("focus-input100")} data-placeholder="Contraseña" />
							{touched.password && errors.password && setErrorMessage("password", errors)}
						</div>

						{/* Submit Form Button */}
						<div className={classes("container-login100-form-btn")}>
							<div className={classes("wrap-login100-form-btn")}>
								<div className={classes("login100-form-bgbtn")} />
								<button className={classes("login100-form-btn")}>Ingresar</button>
							</div>
						</div>

						<div className={classes("text-center p-t-115")}>
							<span className={classes("txt1")}>¿No tienes una cuenta? </span>
							<Link to="/register" className={classes("txt2")}>
								¡Hazte una!
							</Link>
						</div>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}
