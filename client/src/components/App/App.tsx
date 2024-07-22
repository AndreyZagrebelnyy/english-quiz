import React, { useEffect, useState } from 'react';
import './App.css';
import Categories from '../page/Category/Categories';
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios';
import axiosInstance, { setAccessToken } from '../../../services/axiosInstance';
import AuthForm from '../Auth/AuthForm';
import RegForm from '../Reg/RegForm';
import { UserType } from '../User/UserType'
import NotFound from '../page/NotFound';
import HomePage from '../page/HomePage';
import TaskOne from '../page/Task/TaskOne';
import TaskTwo from '../page/Task/TaskTwo';


function App(): JSX.Element {

	const [user, setUser] = useState<UserType | null>(null)

	useEffect(() => {
		// или loader route
		axios.get("/api/tokens/refresh").then((data) => {
			const { accessToken, user } = data.data;
			setUser(user);
			setAccessToken(accessToken);
		});
	}, []);

	const onHandleLogout = async () => {
		const { data } = await axiosInstance.get<{ message: string }>('/auth/logout');
		if (data.message === 'success') {
			setAccessToken(undefined);
			setUser(null);
		}
	}

	return (
		<div className='wrapper'>
			<nav className='navbar'>
				<div>
					<Link to='/'>Главная</Link>
				</div>
				{user ?
					<div className='logout-cart-cont'>
						<div>
							<Link to={`/`} onClick={onHandleLogout}>Выход</Link>
						</div>
						<div>
							<Link to={`/categories`}>Выбрать категорию</Link>
						</div>
					</div> : <div className='log-reg-cont'>
						<div>
							<Link to='/login'>Вход</Link>
						</div>
						<div>
							<Link to='/registration'>Регистрация</Link>
						</div>
					</div>
				}
				{user ? (
					<>
						<div className='user-cont'>
							<div>
								{user.email}
							</div>
							<div>
								Счёт: {user.score}
							</div>
						</div>
					</>
				) :
					null
				}
			</nav>

			<Routes>
				<Route path='/' element={<HomePage user={user} />}></Route>
				<Route path='/categories' element={<Categories user={user} setUser={setUser} />}></Route>
				<Route path='/category/1' element={<TaskOne user={user} setUser={setUser} />}></Route>
				<Route path='/category/2' element={<TaskTwo user={user} setUser={setUser} />}></Route>
				<Route path='/login' element={<AuthForm setUser={setUser} />}></Route>
				<Route path='/registration' element={<RegForm setUser={setUser} />}></Route>
				<Route path='/*' element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
