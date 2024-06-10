import {NavLink } from 'react-router-dom'
import "./Header.scss"

export const Header = () => {
	return (
		<header className='header' id='header'>
			<div className="container">
				<nav className="header__nav">
					<NavLink to="/catalogs" className="header__link">Каталог</NavLink>
					<NavLink to="/clients" className="header__link">Наши клиенты</NavLink>
				</nav>
			</div>
		</header>
	)
}

