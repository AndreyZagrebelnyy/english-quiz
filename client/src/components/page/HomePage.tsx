import React from 'react';
import { UserType } from '../User/UserType';
import './HomePage.css'

const HomePage = ({ user }: { user: UserType | null}): JSX.Element => {
	return (
		<div>
			<h1>Велком, {user ? user.name : 'гость'}!</h1>
<img src="" alt="" />

		</div>

	);
};

export default HomePage;