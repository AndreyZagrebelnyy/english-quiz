import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'
import '../../App/App.css'


function CategoryItem({ category, user, setUser }) {
	return (
		<>
			<Link to={`/category/${category.id}`}>
				<div className='category' style={{ backgroundImage: `url(${`/img/category/img/${category.image}`})` }}>
					{/* <img src = {`/img/category/img/${category.image}`} alt="category-image" /> */}
					<div className='outline'>
						<h2>{category.title}</h2>
					</div>
				</div>
			</Link>
		</>
	)
}

export default CategoryItem