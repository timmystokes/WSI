import React from 'react';
import ProductCard from '../components/ProductCard';
import { shallow } from 'enzyme';

// Here are some sample tests for ProductCard Components



// Here I declare a mock product object for creating ProductCard component

var mockProduct = {
  "id": "metallic-square-lanterns-d5161",
  "name": "Metallic Square Lanterns",
  "links": {
    "www": "https://www.westelm.com/products/metallic-square-lanterns-d5161/"
  },
  "priceRange": {
    "selling": { "high": 111 }
  },
  "thumbnail": { "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201810/0031/metallic-square-lanterns-m.jpg","height": 363 },
  "hero": {"size": "m", "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201810/0031/metallic-square-lanterns-m.jpg", "height": 363 },
  "images": [
    {"width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201810/0031/metallic-square-lanterns-1-m.jpg", "height": 363 },
    { "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201811/0001/metallic-square-lanterns-m.jpg", "height": 363 }
  ]
};

describe('<ProductCard />', () => {
	it('renders the ProductCard component properly', () => {
		shallow(<ProductCard product={mockProduct}/>);
	});

	it('ProductCard component should contain 4 divs', () => {
		var productCard = shallow(<ProductCard product={mockProduct}/>);
		expect(productCard.find('div').length).toEqual(4);
	});

	it('ProductCard component should contain 4 divs', () => {
		var productCard = shallow(<ProductCard product={mockProduct}/>);
		expect(productCard.find('.title').length).toEqual(1);
	});


});