import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance, { setAccessToken } from '../../../services/axiosInstance';
import '.././Auth/AuthForm.css'


function Registration({ setUser }) {
	const navigate = useNavigate();
	const [error, setError] = useState<string | null>(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [score, setScore] = useState(0);
	const [password, setPassword] = useState('');
	const [cpassword, setCPassword] = useState('');
	
	
	const onHandleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log({
				name,
				email,
				password
			});
			if (password.trim() === cpassword.trim()) {
				const { data } = await axiosInstance.post('/auth/registration', {
					name,
					email,
					score,
					password
				});
				if (data.message === 'success') {
					console.log('datamessage', data.message);
					setUser(data.user);
					setAccessToken(data.accessToken);
					navigate('/');
				}
				return;
			}
			setError('Пароли не совпадают');
			return;
		} catch ({ message }) {
			setError(message);
		}
	};
	return (
		<div>
			<h1>Регистрация</h1>
			<form className='auth' onSubmit={onHandleSubmit}>
				<label htmlFor='name'>
					<input
						type='text'
						placeholder='Введите имя'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label htmlFor='email'>
					<input
						type='email'
						placeholder='Введите Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label htmlFor='password'>
					<input
						type='password'
						placeholder='Введите пароль'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<label htmlFor='cpassword'>
					<input
						type='password'
						placeholder='Повторите пароль'
						value={cpassword}
						onChange={(e) => setCPassword(e.target.value)}
					/>
				</label>
				<span>{error && <p>{error}</p>}</span>
				<button className='submit-button' type='submit'>Зарегистрироваться</button>
			</form>
		</div>
	);
}

export default Registration;