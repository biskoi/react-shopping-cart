import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {

	const context = useContext(ProductContext);

	const getCartTotal = () => {
		return context.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{context.cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
