import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from "./contexts/CartContext";
import ItemContext from './contexts/ItemContext';
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	const removeItem = id => {

		// this.setCart({items: this.state.items.filter(item => item  !==removeItem.includes(item.id))
		setCart(cart.filter(item => item.id !== id))


	}


	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem, }}>
				<CartContext.Provider value={{ cart, removeItem }}>


					<Navigation />

					{/* Route */}
					<Route
						exact
						path="/"
						component={Products} />



					<Route
						path="/cart"
						component={ShoppingCart} />

				</CartContext.Provider>
			</ProductContext.Provider>
		</div>

	)

}

export default App;
