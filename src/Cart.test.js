import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';
import {Cart} from './Cart';
import {Link} from 'react-router-dom';

describe('Cart tests', () => {

  const passedData=[{name:'apple',price:'150',currency:'INR'}];

  it('should have heading h1 with text Cart and paragraph', () => {
    const wrapper = shallow(<Cart data={passedData}/>);
    expect(wrapper.exists('h1')).toEqual(true);
    expect(wrapper.find('h1').text()).toEqual('Cart');
    expect(wrapper.find('p').text()).toEqual('Following products have been added to cart ')

  });

  it('should display products in cart when products are passed',() => {

    const wrapper = shallow(<Cart data={passedData}/>);
    expect(wrapper.find('div').at(2).text()).toEqual(" apple INR 150  ");

  })

  it('should display message when no products are added to cart',() => {
    const wrapper = shallow(<Cart data={[]}/>);
    expect(wrapper.find('h3').text()).toEqual('No Products Added')
  })

  it('should have link to checkout ',()=> {
    const wrapper = shallow(<Cart data={passedData}/>);
    expect(wrapper.exists('h1')).toEqual(true);
    expect(wrapper.find('Link').props().to).toEqual('checkout')
  })

});
