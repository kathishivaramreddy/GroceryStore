import React from 'react';
import Routes from './Routes';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';

let wrapper;

beforeEach( () => {
   wrapper = shallow(<Routes/>)
})

it('should have Route component with pathname equal to /', () => {

  expect(wrapper.find('Route').at(0).props().path).toBe('/');
  expect(wrapper.find('Route').at(1).props().path).toBe('/fruits');
});
