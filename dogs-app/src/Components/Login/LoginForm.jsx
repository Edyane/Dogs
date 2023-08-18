import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
	const username = useForm();
	const password = useForm();

	async function handleSubmit(event) {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value);
		}
	}

	return (
		// <section>
		// 	<h1>Login</h1>
		// 	<form onSubmit={handleSubmit}>
		// 		<Input label="Usuário" type="text" name="username" {...username} />
		// 		<Input label="Senha" type="password" name="password" {...password} />
		// 	</form>
		// 	<Link to="/login/perdeu">
		// 		Perdeu a Senha?
		// 	</Link>
		// 	<div>
		// 		<Link to="/login/criar">
		// 			Cadastro
		// 		</Link>
		// 	</div>
		// </section>
	);
};

export default LoginForm;