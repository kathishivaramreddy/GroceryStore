import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {Tea} from './Tea';

describe('product list test', () => {
  let wrapper;
  const addElement = jest.fn();
  const removeElement = jest.fn();
  const fetchProducts = jest.fn();

 const products = [{name:'apple',category:'fruit',price:250,currency:'INR',image:'apple.jpg'}]

  beforeEach(() =>{

    wrapper = shallow(<Vegetables  products={products}
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

  it('should render products',() => {
    expect(wrapper.exists('Products')).toEqual(true);
  })

});
