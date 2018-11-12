import React from 'react';
import {Route} from 'react-router-dom';
import ProductListContainer from '../../container/ProductListContainer';
import FruitsContainer from '../../container/FruitsContainer';
import VegetablesContainer from '../../container/VegetablesContainer';
import MilkContainer from '../../container/MilkContainer';
import MeatContainer from '../../container/MeatContainer';
import TeaContainer from '../../container/TeaContainer';
import CoffeeContainer from '../../container/CoffeeContainer';

const Routes = () => {

  return(
    <div className="route">

      <Route exact path='/' component={ProductListContainer} />
      <Route path='/fruits' component={FruitsContainer }/>
      <Route path='/organic' component={VegetablesContainer}/>
      <Route path='/milk' component={MilkContainer}/>
      <Route path='/meat' component={MeatContainer}/>
      <Route path='/tea' component={TeaContainer}/>
      <Route path='/coffee' component={CoffeeContainer}/>

    </div>
  )
}

export default Routes
