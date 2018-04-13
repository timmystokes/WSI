import React from 'react';

class ProductCarousal extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedProduct: props.selectedProduct,
			activeImageIndex: props.activeImageIndex,
			curImage: typeof props.selectedProduct.images !== 'undefined' ? props.selectedProduct.images[0] : {}
		};

		this.nextImage 	   = this.nextImage.bind(this);
		this.previousImage = this.previousImage.bind(this);
		this.hasImages 	   = this.hasImages.bind(this);
		this.goToSlide 	   = this.goToSlide.bind(this);
	}

	componentWillReceiveProps(props) {
		const state = Object.assign({}, props);
		if (state.selectedProduct.images.length === 0) {
			state.selectedProduct.images[0] = state.selectedProduct.hero;
		}		
		state.curImage = state.selectedProduct.images[this.state.activeImageIndex] || {};
		state.curImage.active = true;
    	this.setState(state);
  	}

	previousImage() {
		this.resetImages()

		if (this.state.activeImageIndex < 1) {
			this.state.activeImageIndex = this.state.selectedProduct.images.length - 1;
		} else {
			this.state.activeImageIndex -= 1;
		}
		
		let curImage = this.state.selectedProduct.images[this.state.activeImageIndex];
		curImage.active = true;
		this.setState({curImage});
	}

	nextImage() {
		this.resetImages();

		if (this.state.activeImageIndex >= this.state.selectedProduct.images.length - 1) {
			this.state.activeImageIndex = 0;
		} else {
			this.state.activeImageIndex += 1;
		}

		let curImage = this.state.selectedProduct.images[this.state.activeImageIndex];
		curImage.active = true;
		this.setState({curImage});
	}

	resetImages() {
		const images = this.state.selectedProduct.images;
		images.forEach(img => img.active = false);
	}

	goToSlide(index) {
		this.resetImages();

		let state = this.state;
		state.activeImageIndex = index;

		state.curImage = state.selectedProduct.images[state.activeImageIndex];
		state.curImage.active = true;
		
		console.log(state.curImage);
		this.setState(state)
	}

	hasImages() {
		if (typeof this.state.selectedProduct.images === 'undefined')
			return false; 
		return this.state.selectedProduct.images.length > 1;
	}
	
	render() {
		const images = this.state.selectedProduct.images || [];
		debugger;
		
		return (
			<div className="carousal">
				<div className="slides">
					{images.map((image,index) => {
						return (
							<div key={index} className={"slide " + (image.active ? 'is-active' : '') }>
								<img src={image.href} />
							</div>
						)
					})};
					<button className={"previous circle-button " + (this.hasImages() ? 'is-active' : '')} onClick={this.previousImage}>
						<i className="fa fa-chevron-circle-left"></i></button>
					<button className={"next circle-button " + (this.hasImages() ? 'is-active' : '')} onClick={this.nextImage}>
						<i className="fa fa-chevron-circle-right"></i></button>

					<div className={"carousal-navigation " + (this.hasImages() ? 'is-active' : '')}>
						{images.map((image, index) => {
							return (
								<div key={index} className={"slide-nav " + (index === this.state.activeImageIndex ? 'is-active' : '')} onClick={() => {this.goToSlide(index)}}>
									<i className="fa fa-circle"></i>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default ProductCarousal;