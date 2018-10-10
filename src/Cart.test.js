import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';
import {Cart} from './Cart';
import {Link} from 'react-router-dom';

describe('Cart tests', () => {

  const passedData=[{name:'apple',price:'150',currency:'INR'}];
  const callback = jest.fn();
  it('should have heading h1 with text Cart and paragraph', () => {
    const wrapper = shallow(<Cart data={passedData}/>);
    expect(wrapper.exists('h4')).toEqual(true);
    expect(wrapper.find('h4').text()).toEqual('Cart');
  });

  it('should display products in cart when products are passed',() => {

    const wrapper = shallow(<Cart data={passedData}/>);
    expect(wrapper.exists('li')).toEqual(true);

  })

  it('should display message when no products are added to cart',() => {
    const wrapper = shallow(<Cart data={[]}/>);
    expect(wrapper.find('p').text()).toEqual('Your Cart is empty.Start shopping now')
  })

  it('should have link to checkout ',()=> {
    const wrapper = shallow(<Cart data={passedData}/>);
    expect(wrapper.find('Link').props().to).toEqual('checkout')
  })

  it('should contain button which clears the cart',()=> {
    const wrapper = shallow(<Cart data={passedData} clearCart={callback}/>);
    expect(wrapper.exists('.clearCart')).toEqual(true);
    wrapper.find('.clearCart').simulate('click');
    expect(callback).toHaveBeenCalled();
  })

});
