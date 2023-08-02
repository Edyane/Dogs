import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
	const username = useForm('email');	
	const password = useForm();
	console.log(password.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(),
		}).then((response) => {
			console.log(response);
			return response.json();
		}).then(json => {
			console.log(json);
		})
	}

	return (
		<section>
			<h1>Login</h1>
			{/* onSubmit = ao enviar eu quero que ocorra uma ação */}
			
			<form action="" onSubmit={handleSubmit}>
				<Input label="Usuário" type="text" name={...username} />
				<Input label="Senha" type="password" name={...password} />
				<Button>Entrar</Button>
			</form>

			<Form />

			<Link to="/login/criar">Cadastro</Link>
		</section>
	);
};

export default LoginForm;