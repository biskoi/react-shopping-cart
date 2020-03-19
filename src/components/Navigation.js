import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext';

const Navigation = props => {

	const context = useContext(ProductContext);
	console.log('nav context', context)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{context.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
