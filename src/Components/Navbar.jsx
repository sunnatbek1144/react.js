import { Link } from 'react-router';

const Navbar = () => {
	return (
		<>
		<nav>
			<div className="logo">A_SHOP</div>
			<ul>
				<li>
					<link to="/">Home</link>
				</li>
				<li>
					<link to="/movies">Movies</link>
				</li>
				<li>
					<link to="/Cart">Cart</link>
				</li>
				<li>
					<link to="/Contact">Contact</link>
				</li>
				<li>
					<link to="/Payment">Payment</link>
				</li>
				<li>
					<link to="/Shop">Shop</link>
				</li>
			</ul>
		</nav>
		</>
	)
}
export default Navbar;