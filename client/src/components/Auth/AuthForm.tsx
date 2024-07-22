import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from '../../../services/axiosInstance'
import './AuthForm.css'

function AuthForm({ setUser }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate();

	const onSubmitHandler = async (e) => {
		e.preventDefault()
		const result = await axios.post('api/auth/login', { email, password })
		if (result.status === 200) {
			setUser(result.data.user); // см. файл /src/context/userContext.js
			setAccessToken(result.data.accessToken); // !!!!
			navigate("/"); // Переход на главную страницу используя хук navigate
		}
		console.log(result);
	}

	return (
		<div>
			<h1>Вход</h1>
			<form onSubmit={(e) => onSubmitHandler(e)}>
				<input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
				<input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<button className='submit-button' type='submit'>Войти</button>
			</form>
		</div>
	)
}

export default AuthForm