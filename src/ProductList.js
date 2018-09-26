import React from 'react';
import some from 'lodash/some';
import sortBy from 'lodash/sortBy'
import './App.css';
import './ProductList.css'



export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      products: [
        {name: 'Apple', price: 250, image: require('./images/apple.jpg'), currency: 'INR'},
        {name: 'Grapes - Red', price: 150, image: require('./images/grapes.jpg'), currency: 'INR'},
        {name: 'Tomato', price: 125, image: require('./images/tomato.jpg'), currency: 'INR'},
        {name: 'Kiwi', price: 95, image: require('./images/kiwi.jpg'), currency: 'INR'},
        {name: 'Potato', price: 30, image: require('./images/potato.jpg'), currency: 'INR'},
        {name: 'LadiesFinger', price: 45, image: require('./images/ladiesfinger.jpg'), currency: 'INR'},
        {name: 'Turmeric', price: 22, image: require('./images/turmeric.jpg'), currency: 'INR'},
        {name: 'Maida', price: 75, image: require('./images/maida.jpg'), currency: 'INR'},
        {name: 'Pomengranate', price: 125, image: require('./images/pomengranate.jpg'), currency: 'INR'},
        {name: 'Chilli Powder', price:85, image: require('./images/chilli.jpg'), currency: 'INR'},
        {name: 'Pear', price:64, image: require('./images/pear.jpg'), currency: 'INR'},
        {name: 'Water Melon', price:225, image: require('./images/watermelon.jpg'), currency: 'INR'},
      ],
    };
    this.handleSelectChange=this.handleSelectChange.bind(this);
  }

  handleSelectChange(e){
    console.log('cart state before select-option',this.state.cart)
    var value = e.target.value
    let sortedState = sortBy(this.state.products,function(product){ return product.price })
    value ==='low' ? this.setState({products : sortedState}) : this.setState({products : sortedState.reverse()})

    console.log('value of select box',e.target.value,this.state.cart)
  }

  render() {
    console.log('in productList rendering','first state of products ',this.state.products)
    const listItems = this.state.products.map((data) =>
      <div className="boxed" key={data.name}>
        <img src={data.image} alt=''/><br/>
        {data.name}<br/>
        {data.currency} {data.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onClick(data.name, data.currency, data.price,data.image)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name,data.currency,data.price)}>Remove From Cart </button>
      </div>);

    const searchItems = this.state.products.filter((data) => data.name.toUpperCase() === this.props.onSearch.toUpperCase()).map((data) =>
      <div className="boxed" key={data.name}>
        <img src={data.image} alt=''/><br/>
        {data.name}<br/>
        {data.currency} {data.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onClick(data.name, data.currency, data.price,data.image)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
      </div>);



      const filterItems = this.state.products.filter( (product) =>  some(this.props.onFilter,function(filterToCheck){
            if(product.price > filterToCheck.min && product.price < filterToCheck.max){return true}}))
            .map((product) =>
            <div className="boxed" key={product.name}>
              <img src={product.image} alt=''/><br/>
              {product.name}<br/>
              {product.currency} {product.price}<br/>
              <button className="addBasket" value="Add" onClick={ () => this.props.onClick(product.name,product.currency,product.price,product.image)}>
              Add To Cart </button>
              <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(product.name)}>
              Remove From Cart </button>
            </div>);
      return (
      <div >

        <div className="productboxed">
          <div className ="productheader">

            <h5 className="position" >All Products</h5>
            <select className="position" onClick={this.handleSelectChange}>
              <option value="low" > Price-Low to High</option>
              <option value="high" > Price-High to Low</option>
            </select>

          </div>
          <br/>
          {searchItems.length === 0 && filterItems.length === 0 ? listItems
          : searchItems.length === 0 ? filterItems : searchItems}
        </div>

      </div>
    );
  }
}
