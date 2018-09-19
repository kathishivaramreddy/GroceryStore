import React from 'react';
import {ProductList} from './ProductList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';


describe ('product list test',() => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<ProductList />);
    });

    test('should have div,br elements',() =>{


      expect(wrapper.exists('div')).toEqual(true);
      expect(wrapper.find('div').length).toEqual(9);
      expect(wrapper.exists('br')).toEqual(true);
    });

    it('should have button element',() => {

      expect(wrapper.find('button').length).toEqual(6);
      // expect(wrapper.contains(<input className = "addBasket" type="submit" value="Add"/>)).toEqual(true);
    });

    it('should call function on button click', () => {
        const mockCallback = jest.fn();

        wrapper.find('button').at(0).simulate('click');
         expect(mockCallback).toHaveBeenCalledWith(250);
    });

    it('should contain link to checkout', () => {

      expect(wrapper.find(Link).at(0).props().to).toBe('/checkout');
     });

     // it('should pass product name and price to checkout',() => {
     //    const wrapper = shallow(<ProductList />);
     //
     // });

})
