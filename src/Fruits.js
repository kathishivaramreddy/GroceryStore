import React from 'react';
import {PriceSorter} from './PriceSorter';
import {Filter} from './Filter';
import allProductsList from './AllProducts';
import sortBy from 'lodash/sortBy';
import './Fruits.css';

export class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      products: [],
    };
    this.handleSelectChange=this.handleSelectChange.bind(this);
  }

  componentDidMount(){

    const productList = allProductsList().products.filter(product =>  product.category === 'fruits')
    this.setState({products : productList})

  }

  handleSelectChange(e){
    const value = e.target.value
    const sortedState = sortBy(this.state.products,function(product){
       return product.price
     })
    value ==='low' ? this.setState({products : sortedState}) : this.setState({products : sortedState.reverse()})
  }

  render() {
    console.log('render Fruits')
    const {products} = this.state;

    const listItems = products.map((product) =>
      <div className="boxed" key={product.name}>
        <img src={product.image} alt=''/><br/>
        {product.name}<br/>
        {product.currency} {product.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onAdd(product.name, product.currency, product.price,product.image,product.image)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(product.name)}>Remove From Cart </button>
      </div>)

    return (
      <div>
        <div className="productboxed">
          <PriceSorter sorter={this.handleSelectChange}/>
          <h3>Fruits</h3>
          <Filter />
          {listItems}
        </div>

      </div>
    );
  }
}
