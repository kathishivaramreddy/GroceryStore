import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {Filter} from './Filter'

describe('PriceSorter ', () => {

const filterPriceAction = jest.fn();
const filterPriceRemover = jest.fn();
const filterCategoryAction = jest.fn();
const filterCategoryRemover = jest.fn();
let wrapper;

  beforeEach(() =>{
    wrapper = shallow(<Filter filterPriceAction={filterPriceAction} filterPriceRemover={filterPriceRemover}
      filterCategoryAction={filterCategoryAction} filterCategoryRemover={filterCategoryRemover}/>)
  })

  it('should have select and option elements',() => {

    expect(wrapper.exists('input[type="checkbox"]')).toEqual(true);
  })

  // it('should call function on click ',() => {
  //
  //   wrapper.find('.priceFilter').simulate('change',{target: { name : 'price1'}});
  //   expect(filterPriceAction).toHaveBeenCalled();
  // })

})
