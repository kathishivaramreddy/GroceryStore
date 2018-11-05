import React from 'react';
import {Route} from 'react-router-dom';
import ProductListContainer from '../../container/ProductListContainer';
import Fruits from '../Fruits/Fruits';
import {Vegetables} from '../Vegetables/Vegetables';
import {Milk} from '../Milk/Milk';
import {Meat} from '../Meat/Meat';
import {Tea} from '../Tea/Tea';
import {Coffee} from '../Coffee/Coffee';

const Routes = () => {

  return(
    <div className="route">

      <Route exact path='/' component={ProductListContainer} />
      <Route path='/fruits' component={Fruits }/>
      <Route path='/organic' component={Vegetables}/>
      <Route path='/milk' component={Milk}/>
      <Route path='/meat' component={Meat}/>
      <Route path='/tea' component={Tea}/>
      <Route path='/coffee' component={Coffee }/>

    </div>
  )
}

export default Routes
