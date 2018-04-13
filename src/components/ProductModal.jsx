import React from 'react';
import ProductCarousal from './ProductCarousal.jsx';
class ProductModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedProduct: props.selectedProduct,
			showModal: props.showModal,
			activeImageIndex: 0
		};

		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		console.log("close modal called")
		const state = this.state;
		state.showModal = false;
		state.activeImageIndex = 0;
		this.setState(state);
	}

	componentWillReceiveProps(props) {
    	this.setState(props);
  	}

	render() {
		const selectedProduct = this.state.selectedProduct;
		return (
			<div className={"modal " + (this.state.showModal ? 'is-active' : '')}>
			<div className="modal-background" onClick={this.closeModal}></div>
			<div className="modal-content">
				<ProductCarousal selectedProduct={selectedProduct} activeImageIndex={this.state.activeImageIndex} />
			</div>
			<button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
			</div>
		)
	}
}

export default ProductModal;