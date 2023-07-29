import React from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {
	const [username, setUsername] = useState('');
		[password, setPassword] = useState('');
		
	return (
		<section>
			<h1>Login</h1>
			<form action="">
				<input type="text"/>
			</form>
			<Link to="/login/criar">Cadastro</Link>
		</section>
	)
}

export default LoginForm;