import React from 'react';
import Navigation from './Navigation';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';

let wrapper;

beforeEach( () => {
   wrapper = shallow(<Navigation/>)
})

it('should have Links to Fruits ',() => {
  expect(wrapper.find('Link').at(1).props().to).toEqual('/fruits')
})
