import React from 'react';
import ProductList from './ProductList.jsx';
import ProductModal from './ProductModal.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProduct: {},
			showModal: false
		}
    this.launchModal = this.launchModal.bind(this);
	}


	launchModal(product) {
    const state = {
      selectedProduct: product,
      showModal: true
    }
    this.setState(state);
	}

	render() {
		const selectedProduct = this.state.selectedProduct;
		return (
			<div>
				<ProductList selectedProduct={selectedProduct} launchModal={this.launchModal}/>
				<ProductModal selectedProduct={selectedProduct} showModal={this.state.showModal}/>
			</div>
		)
	}
}

export default App;