import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';
import {navigation} from '../Util/Navigation';
jest.mock('../Util/Navigation');

let wrapper;
beforeEach( () => {
   wrapper = shallow(<App />)
})

it('should have a h1 heading element ', () => {

  expect(wrapper.exists('h1')).toEqual(true);
  expect(wrapper.find('h1').text()).toEqual(' Grocery Store ');
});

it('should render navigation bar on function call ', () => {
  navigation();
  expect(wrapper.find('button').at(0).text()).toEqual('Home')
})
it('should have Link component with pathname equal to /', () => {

  expect(wrapper.find(Link).at(0).props().to).toBe('/');
  expect(wrapper.find(Link).at(1).props().to).toBe('/fruits');
});

it('should render Cart component ', () => {

  expect(wrapper.exists('Cart')).toEqual(true);
});

it('should have render search box ', () => {

  expect(wrapper.exists('input')).toEqual(true);
});
