import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';
import {Cart} from './Cart';

describe('Cart tests', () => {
  const passedData=[{name: 'apple', price: '150', currency: 'INR',image:'apple.jpg'}];

  let wrapper;
  beforeEach(() =>{
    wrapper = shallow(<Cart  cart={passedData} />)
    })

  it('should have heading h1 with text Cart and paragraph', () => {
    expect(wrapper.exists('h4')).toEqual(true);
    expect(wrapper.find('h4').text()).toEqual('Cart');
  });

  it('should display products in cart when products are passed', () => {
    expect(wrapper.exists('li')).toEqual(true);
  });

  it('should display message when no products are added to cart', () => {
    const wrapper = shallow(<Cart cart={[]}/>);
    expect(wrapper.find('p').text())
        .toEqual('Your Cart is empty.Start shopping now');
  });

});
