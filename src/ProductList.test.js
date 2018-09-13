import React from 'react';
import ReactDOM from 'react-dom';
import {ProductList} from './ProductList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

it('should have  div elements',() =>{

  const wrapper = shallow(<ProductList />);
  expect(wrapper.exists('div')).toEqual(true);
  expect(wrapper.find('div').length).toEqual(7);
  expect(wrapper.exists('br')).toEqual(true);
});

it('should have input element',() => {

  const wrapper = shallow(<ProductList />);
  expect(wrapper.find('input').length).toEqual(6);
  // expect(wrapper.contains(<input className = "addBasket" type="submit" value="Add"/>)).toEqual(true);
});

it('should submit when click on input type submit',() => {
  const wrapper =shallow(<ProductList />);
  const inputButton = wrapper.find('.addBasket').at(0)
  inputButton.simulate('submit');
})
