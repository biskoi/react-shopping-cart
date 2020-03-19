import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';

// Components
import Product from './Product';


const Products = props => {

	const context = useContext(ProductContext)
	console.log('products context', context);

	return (

		<div className="products-container">
			{context.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={context.addItem}
				/>
			))}
		</div>

	);

};

export default Products;
