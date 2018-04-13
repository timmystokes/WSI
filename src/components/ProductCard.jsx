import React from 'react'

class ProductCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			product: props.product,
			selectedProduct: props.selectedProduct
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(product) {
		this.props.launchModal(product);
	}

	render() {
		const product = this.state.product;
		return (
			<div className="product column is-4" onClick={() => { this.handleClick(product)}}>
				<div className="title">
					{product.name}
				</div>
				<div className="price">
					${product.priceRange.selling.high}
				</div>
				<div className="hero-image">
					<img src={product.hero.href} />
				</div>
			</div>
		)
	}
}

export default ProductCard;