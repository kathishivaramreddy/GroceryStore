import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';

let wrapper;

beforeEach( () => {
   wrapper = shallow(<App/>)
})

it('should have a h1 heading element ', () => {

  expect(wrapper.exists('h1')).toEqual(true);
  expect(wrapper.find('h1').text()).toEqual(' Grocery Store ');
});

it('should render navigation bar  ', () => {
  expect(wrapper.exists('Navigation')).toEqual(true);
  // expect(wrapper.find('button').at(0).text()).toEqual('Home')
})

// it('should render Cart component ', () => {
//   expect(wrapper.exists('CartContainer')).toEqual(true);
// });

it('should have Route component ', () => {

  expect(wrapper.exists('Routes')).toEqual(true);
});
