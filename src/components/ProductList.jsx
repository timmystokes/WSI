import React from 'react'
import ProductCard from './ProductCard.jsx';

const endpoint = '/data/products.json';


class ProductList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
			selectedProduct: props.selectedProduct
		}
	}

	componentDidMount() {
		this.getProducts();
	}

	getProducts() {
		fetch(endpoint)
		.then(response => {
			return response.json();
		})
		.then(json => {
			let products = json.groups;
			this.setState({ products });
		});
	}

	render() {
		const products = this.state.products;
		return (
			<div className="product-list container">
				<div className="columns is-multiline">
				{products.map((product, key) => {
					return <ProductCard key={product.id} product={product} launchModal={this.props.launchModal}/>;
				})}
				</div>
			</div>
		)
	}
}

export default ProductList;