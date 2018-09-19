import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import {Cart} from './Cart'

describe('Cart tests',() => {

  let wrapper;
  beforeEach(() =>{
      wrapper = shallow(<Cart />);
  });

  it('should have heading h1 with text Cart',() => {
    // const wrapper = shallow(<Cart/>)
   expect(wrapper.exists('h1')).toEqual(true);
    expect(wrapper.find('h1').text()).toEqual('Cart');
  });

  it('should have button element',() => {
    expect(wrapper.exists('button')).toEqual(true);
  })

})
