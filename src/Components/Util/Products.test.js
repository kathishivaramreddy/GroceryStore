import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {Products} from './Products';

describe('product list test', () => {
  let wrapper;
  const addElement = jest.fn();
  const removeElement = jest.fn();

 const products = [{name:'apple',category:'fruit',price:250,currency:'INR',image:'apple.jpg'}]

  beforeEach(() =>{

    wrapper = shallow(<Products  products={products}
      addCartAction={addElement} removeCartAction={removeElement}/>)

  });

  it('should call a addElement function when clicked on Add to cart' ,() => {
      wrapper.find('.addBasket').simulate('click')
      expect(addElement).toHaveBeenCalled()
  })

  it('should call a removeElement function when clicked on Remove from cart' ,() => {
      wrapper.find('.removeBasket').simulate('click')
      expect(removeElement).toHaveBeenCalled()
  })

})
