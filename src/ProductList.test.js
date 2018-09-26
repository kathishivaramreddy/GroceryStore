import React from 'react';
import {ProductList} from './ProductList';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';
import {mount} from 'enzyme';


describe('product list test', () => {
  let wrapper;
  let callback = jest.fn();
  const searchItem = 'potato';
  const filterItem = {min:1,max:100}
  const initProp = { a:1}


  beforeEach(() =>{
    wrapper = shallow(<ProductList onClick={callback} onRemove={callback} onSearch={searchItem} onFilter={filterItem}/>);
  });

  test('should have div,br,button elements', () =>{
    expect(wrapper.exists('div')).toEqual(true);
    expect(wrapper.exists('br')).toEqual(true);
    expect(wrapper.exists('button')).toEqual(true);
  });

  it('should call a function on button click', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    expect(callback).toHaveBeenCalledTimes(2);

    wrapper.find('button').at(1).simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('should return product on successful search', () => {
    expect(wrapper.find('img').at(0).props().src).toEqual('potato.jpg');
  });

  it('should return product based on checkbox seleted on filter ', () => {
    wrapper = shallow(<ProductList  onFilter={{min:1,max:100}}/>);
    // TODO
  });

  it('should return products based on select-option selected',() =>{
    const wrapper = mount(<ProductList onClick={callback} onRemove={callback} onSearch='' onFilter={{min:1,max:100}}/>);
    wrapper.find('select').simulate('click',{target: { value : 'low'}});
    expect(wrapper.find('img').at(0).props().src).toEqual('potato.jpg')
    wrapper.find('select').simulate('click',{target: { value : 'high'}});
    expect(wrapper.find('img').at(0).props().src).toEqual('apple.jpg')
  })

});
