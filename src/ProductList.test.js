import React from 'react';
import {ProductList} from './ProductList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';


describe ('product list test',() => {
    let wrapper;
    let callback = jest.fn()
    beforeEach(() =>{
        wrapper = shallow(<ProductList onClick={callback} onRemove={callback}/>);
    });

    test('should have div,br elements',() =>{


      expect(wrapper.exists('div')).toEqual(true);
      expect(wrapper.find('div').length).toEqual(8);
      expect(wrapper.exists('br')).toEqual(true);
    });

    it('should have button element',() => {

      expect(wrapper.find('button').length).toEqual(12);

    });


    it('should call a function on button click', () => {
      wrapper.find('button').at(0).simulate('click');
      wrapper.find('button').at(0).simulate('click');
      expect(callback).toHaveBeenCalledTimes(2);


      wrapper.find('button').at(1).simulate('click');
      expect(callback).toHaveBeenCalled();
    });

    it('should have image element with source attribute',() => {

      expect(wrapper.find('img').at(0).props().src).toEqual('apple.jpg')
    })
})
