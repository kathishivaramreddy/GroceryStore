import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {PriceSorter} from './PriceSorter'

describe('PriceSorter ', () => {

let sortProducts = jest.fn();
let wrapper;
  beforeEach(() =>{
    wrapper = shallow(<PriceSorter sortProducts={sortProducts}/>)
  })

  it('should have select and option elements',() => {

    const wrapper = shallow(<PriceSorter />)
    expect(wrapper.exists('select')).toEqual(true);
    expect(wrapper.exists('option')).toEqual(true);
  })

  it('should have call function on change ',() => {

    wrapper.find('select').simulate('click',{target: { value : 'LOW'}});
    expect(sortProducts).toHaveBeenCalled();
  })

})
