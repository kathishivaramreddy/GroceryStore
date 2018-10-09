import React from 'react';
import {Fruits} from './Fruits';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';


describe('product list test', () => {
  let wrapper;
  let callback = jest.fn();
  beforeEach(() =>{
    wrapper = shallow(<Fruits onClick={callback} onRemove={callback}/>);
  });


  it('should call a function on button click', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    expect(callback).toHaveBeenCalledTimes(2);
    wrapper.find('button').at(1).simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('should have image element with source attribute', () => {
    expect(wrapper.find('img').at(0).props().src).toEqual('apple.jpg');
  });

  it('should render PriceSorter',() => {

    expect(wrapper.exists('PriceSorter')).toEqual(true);
  })
});
