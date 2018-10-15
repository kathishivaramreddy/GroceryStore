import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import {FIlter} from './Filter';
import {ProductList} from './ProductList'

global.fetch = fetch;

describe('ProductList test' ,() => {

  it('should have div,button elements',() => {

    const wrapper = shallow(<ProductList />)
    expect(wrapper.exists('div')).toEqual(true);
    expect(wrapper.exists('h5')).toEqual(true);
  })

  it('fetch should be called ', () => {

    const wrapper = shallow(<ProductList />)
    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/products");

  });



})
