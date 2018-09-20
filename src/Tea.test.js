import React from 'react';
import {Tea} from './Tea';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';


describe ('product list test',() => {
    let wrapper;
    let callback = jest.fn()
    beforeEach(() =>{
        wrapper = shallow(<Tea onClick={callback} onRemove={callback}/>);
    });


    it('should call a function on button click', () => {
      wrapper.find('button').at(0).simulate('click');
      wrapper.find('button').at(0).simulate('click');
      expect(callback).toHaveBeenCalledTimes(2);
      wrapper.find('button').at(1).simulate('click');
      expect(callback).toHaveBeenCalled();
    });

    it('should have image element with source attribute',() => {

      expect(wrapper.find('img').at(0).props().src).toEqual('redlabeltea.jpg')
    })



  })
