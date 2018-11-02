import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {SearchBar} from './Search'


describe('Search Bar ', () => {

let searchProducts = jest.fn();
let wrapper;
  beforeEach(() =>{
    wrapper = shallow(<SearchBar searchAction={searchProducts}/>)
  })

  it('should have search box',() => {
    expect(wrapper.exists('.searchbox')).toEqual(true);
  })

  it('should have call function on change ',() => {

    wrapper.find('.searchbox').simulate('change',{target: { value : 'apple'}});
    expect(searchProducts).toHaveBeenCalled();
  })

})
