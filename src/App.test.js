import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('should have a h1 heading element ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('h1')).toEqual(true);
  expect(wrapper.find('h1').text()).toEqual("Welcome to Grocery Store");
});
it('should have navigation bar', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('Navigation')).toEqual(true);
});
it('should render product list component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('ProductList')).toEqual(true);
});
