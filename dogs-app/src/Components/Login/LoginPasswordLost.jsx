import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../Api';
import Error from '../Helper/Error';

const LoginPasswordLost = () => {
	const login = useForm();
	const { data, loading, error, request } = useFetch();

	return (
		<section>
			<h1 className="title">Perdeu a senha?</h1>
		</section>
	);
};

export default LoginPasswordLost;
