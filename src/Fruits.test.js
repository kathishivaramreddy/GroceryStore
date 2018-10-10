import React from 'react';
import {Fruits} from './Fruits';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';


describe('product list test', () => {
  let wrapper;
  const addelement = jest.fn();
  const removeelement = jest.fn();
  const event = {target : {value :'low'}}
  beforeEach(() =>{
    wrapper = shallow(<Fruits onAdd={addelement} onRemove={removeelement}/>);
  });

  it('should call a function on button click', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    expect(addelement).toHaveBeenCalledTimes(2);
    wrapper.find('button').at(1).simulate('click');
    expect(removeelement).toHaveBeenCalled();
  });

  it('should have image element with source attribute', () => {
    expect(wrapper.find('img').at(0).props().src).toEqual('apple.jpg');
  });

  it('should render PriceSorter',() => {

    expect(wrapper.exists('PriceSorter')).toEqual(true);
  })

  it('should render Filter Box',() => {

    expect(wrapper.exists('Filter')).toEqual(true);

  })

  it('should sort based on option selected',()=> {

    const fn = wrapper.find('PriceSorter').props().sorter
    fn(event);
    expect(wrapper.find('img').at(0).props().src).toEqual('pear.jpg');

  })

});
