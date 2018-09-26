import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {shallow} from 'enzyme';
import {Login} from './Login';

describe('Login tests',() => {

  const wrapper = shallow(<Login authentication=[{userName:'abc@gmail.com',passWord:'abc'}]/>);

  it('should have input and label fields',() => {

    expect(wrapper.find('label').length).toEqual(2);
    expect(wrapper.find('input').length).toEqual(2);
  })

  it('should get loggedIn on correct username and password',()=> {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('h5').text()).toEqual('Login successful');
  })

});
