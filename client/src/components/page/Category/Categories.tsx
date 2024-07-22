import React, { useEffect, useState } from 'react'
import { CategoryArrType } from './TypeCategories'
import { getApiCategories } from './api'
import CategoryItem from './CategoryItem'
import './Categories.css'

function Categories({ user, setUser }): JSX.Element {
	const [categories, setCategories] = useState<CategoryArrType | []>([])

	useEffect(() => {
		getApiCategories().then((data) => setCategories(data)).catch(console.log);
	}, [])

	return (
		<>
			<div className='outline'>
				<h1>Выбери категорию</h1>
			</div>
			<div className='categories-cont'>{categories.map((category) => (
				<div key={category.id}>
					<CategoryItem category={category} user={user} setUser={setUser} />
				</div>
			))}</div>

		</>
	)
}

export default Categories