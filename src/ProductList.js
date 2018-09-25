import React from 'react';
import some from 'lodash/some';
import './App.css';



export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state={
      products: [
        {name: 'Apple', price: 250, image: require('./images/apple.jpg'), currency: 'INR'},
        {name: 'Grapes - Red', price: 150, image: require('./images/grapes.jpg'), currency: 'INR'},
        {name: 'Tomato', price: 125, image: require('./images/tomato.jpg'), currency: 'INR'},
        {name: 'Kiwi - Green', price: 95, image: require('./images/kiwi.jpg'), currency: 'INR'},
        {name: 'Potato', price: 30, image: require('./images/potato.jpg'), currency: 'INR'},
        {name: 'LadiesFinger', price: 45, image: require('./images/ladiesfinger.jpg'), currency: 'INR'},
      ],
    };
    // this.isValid = this.isValid.bind(this);
  }

  render() {

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

      console.log('rendering producttlist and onFIlterprop',this.props.onFilter.min)
      // const filterItems = filteredItems(this.state.products,this.props.onFilter)
      const filterItems = this.state.products.filter( (product) =>  some(this.props.onFilter,function(filterToCheck){
        console.log('filterToCheck','conditon',filterToCheck,product.price)
            if(product.price > filterToCheck.min && product.price < filterToCheck.max)
            {
              console.log('condition',product.price > filterToCheck.min && product.price < filterToCheck.max)
              return true;
            }
        })).map((data) =>
          <div className="boxed" key={data.name}>
            <img src={data.image} alt=''/><br/>
            {data.name}<br/>
            {data.currency} {data.price}<br/>
            <button className="addBasket" value="Add" onClick={ () => this.props.onClick(data.name, data.currency, data.price,data.image)}>Add To Cart </button>
            <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
          </div>);

      console.log('filterItems', filterItems);
      return (
      <div >

        <div className="productboxed">
          <h3 align="left">All Products</h3>
          {searchItems.length === 0 && filterItems.length === 0 ? listItems
          : searchItems.length === 0 ? filterItems : searchItems}
          {/* {searchItems.length === 0 ? listItems : searchItems} */}
        </div>

      </div>
    );
  }
}
