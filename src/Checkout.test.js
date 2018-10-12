import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';
import {Checkout} from './Checkout';

describe('Checkout tests', () => {
  const passedData=[{name: 'apple', price: 150, currency: 'INR', quantity: 1}, {name: 'kiwi', price: 150, currency: 'INR', quantity: 1}];
  const wrapper = shallow(<Checkout totalPrice={passedData}/>);

  it('should display total price to be paid', () => {
    // const wrapper = shallow(<Checkout totalPrice={passedData}/>)
    expect(wrapper.find('h5').length).toEqual(1);
    expect(wrapper.find('h5').text()).toEqual('Total amount to be paid:- 300');
  });
});
