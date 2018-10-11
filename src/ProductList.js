import React from 'react';
import some from 'lodash/some';
import sortBy from 'lodash/sortBy';

// import {getProducts} from './client/AmbrosiaClient';
import {Filter} from './Filter';
import {PriceSorter} from './PriceSorter'
// import './App.css';
import './ProductList.css'



export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      products: [],
      isLoaded:false,
    };
    this.handleSelectChange=this.handleSelectChange.bind(this);
  }

  componentDidMount(){
  //use function to get products
        this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then( json => {
      this.setState({
                      products : json.products,
                      isLoaded: true,
                    })
    })
    .catch(
      error => console.log('fetch error',error)
    )
  }

  handleSelectChange(e){
    var value = e.target.value
    let sortedState = sortBy(this.state.products,function(product){ return product.price })
    value ==='low' ? this.setState({products : sortedState}) : this.setState({products : sortedState.reverse()})
  }

  render() {

    var {isLoaded,products} = this.state;

    if(!isLoaded){
      return (
        <div>
          <div className="loader">
          </div>
          <h5 className="loaderData">Data Loading ... </h5>
        </div>
      )
    }
    const listItems = products.map((data) =>
      <div className="boxed" key={data.name}>
        <img src={data.image} alt=''/><br/>
        {data.name}<br/>
        {data.currency} {data.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onAdd(data.name, data.currency, data.price,data.image)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name,data.currency,data.price)}>Remove From Cart </button>
      </div>);

    const searchItems = products.filter((data) => data.name.toUpperCase() === this.props.onSearch.toUpperCase()).map((data) =>
      <div className="boxed" key={data.name}>
        <img src={data.image} alt=''/><br/>
        {data.name}<br/>
        {data.currency} {data.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onClick(data.name, data.currency, data.price,data.image)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
      </div>);

      const filterItems = products.filter( (product) =>  some(this.props.categoryFilter,function(filterToCheck){
            if(filterToCheck === undefined){
              return true;
            }
            else if(product.category === filterToCheck.category){
              return true
            }
          }
          )).filter( (product) =>  some(this.props.onPriceFilter,function(filterToCheck){
                if(filterToCheck === undefined ){
                  return true;
                }
                else if(product.price > filterToCheck.min && product.price < filterToCheck.max ){
                  return true
                } }
                ))
            .map((product) =>
            <div className="boxed" key={product.name}>
              <img src={product.image} alt=''/><br/>
              {product.name}<br/>
              {product.currency} {product.price}<br/>
              <button className="addBasket" value="Add" onClick={ () => this.props.onClick(product.name,product.currency,product.price,product.image)}>
              Add To Cart </button>
              <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(product.name)}>
              Remove From Cart </button>
            </div>
          );

      return (
      <div >

        <div >

          <div className ="productsheader">

            <h5>All Products</h5>
            <PriceSorter sorter={this.handleSelectChange}/>

          </div>

          <div className="productsboxed">

            <div>
              <Filter/>
            </div>


            {searchItems.length === 0 && filterItems.length === 0 ? listItems
            : searchItems.length === 0 ? filterItems : searchItems}

          </div>

        </div>

      </div>
    );
  }
}
