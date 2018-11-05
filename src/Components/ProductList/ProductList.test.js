import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {ProductList} from './ProductList';
import * as display from '../Util/ProductsDisplay'

display.productDisplay = jest.fn();

describe('product list test', () => {
  let wrapper;
  const addElement = jest.fn();
  const removeElement = jest.fn();
  const fetchProducts = jest.fn();

 const products = [{name:'apple',category:'fruit',price:250,currency:'INR',image:'apple.jpg'}]

  beforeEach(() =>{

    wrapper = shallow(<ProductList  products={products}
      addCartAction={addElement} removeCartAction={removeElement}/>)

  });

  it('should render PriceSorter',() => {
    expect(wrapper.exists('.priceSorter')).toEqual(true);
  })

  it('should render Filter Box',() => {
    expect(wrapper.exists('.filter')).toEqual(true);
  })

  it('should render search box',() => {
    expect(wrapper.exists('.searchBar')).toEqual(true);
  })

  it('should call a function render products',() => {
    display.productDisplay();
    expect(display.productDisplay()).toHaveBeenCalled();
  })

  // it('should render products',() => {
  //   display.productDisplay
  //   expect(wrapper.find('img').at(0).props().src).toEqual('apple.jpg');
  // })
  //
  // it('should call a function on add to cart button click', () => {
  //   wrapper.find('button').at(0).simulate('click');
  //   expect(addElement).toHaveBeenCalled();
  // });
  //
  // it('should call a function on remove from cart button click', () => {
  //   wrapper.find('button').at(1).simulate('click');
  //   expect(removeElement).toHaveBeenCalled();
  // });
});
