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
