import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {CartContainer} from './CartContainer';


describe('Cart Container',() => {

  let wrapper;
  beforeEach(()=>{
    wrapper=shallow(<CartContainer />)
  })

  it('should render cart component',()=> {
    expect(wrapper.exists('Cart')).toEqual(true)
  })

  // it('should pass cart state as props to cart component',() => {
  //   expect(wrapper.find('Cart').props()).toEqual()
  // })

})
