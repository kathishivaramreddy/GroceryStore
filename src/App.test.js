import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';

it('should have a h1 heading element ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('h1')).toEqual(true);
  expect(wrapper.find('h1').text()).toEqual('Welcome to Grocery Store');
});

it('should have Link component with pathname equal to /', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Link).at(0).props().to).toBe('/');
  expect(wrapper.find(Link).at(1).props().to).toBe('/fruits');
});

it('should render Cart component ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('Cart')).toEqual(true);
});

it('should have search box ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('input')).toEqual(true);
});

describe('Filter box ',() => {

  it('should have h3 heading with text Filter Here',() => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('h3')).toEqual(true);
    expect(wrapper.find('h3').text()).toEqual('Filter here');
  })


})
