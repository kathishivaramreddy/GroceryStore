import React from 'react';
import PropTypes from 'prop-types';
import allProductsList from './AllProducts';
import {PriceSorter} from './PriceSorter';
import {Filter} from './Filter';
import sortBy from 'lodash/sortBy';
import {searchBar} from './Searchbar';
import {productDisplay} from './productsDisplay';
import './Meat.css';

export class Meat extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      products: [],
    };
    this.handleSelectChange=this.handleSelectChange.bind(this);
  }
  componentDidMount() {
    const productList = allProductsList().products.filter((product) => product.category === 'meat');

    this.setState({products: productList});
  }
  handleSelectChange(e) {
    const value = e.target.value;
    const sortedState = sortBy(this.state.products, function(product) {
      return product.price;
    });
    value ==='low' ? this.setState({products: sortedState}) : this.setState({products: sortedState.reverse()});
  }
  render() {
    const {products} = this.state;
    const {onAdd, onRemove, onSearch} = this.props;

    const listItems = productDisplay(products, onAdd, onRemove);

    const searchItems =searchBar(products, onAdd, onRemove,
        onSearch);


    return (
      <div>
        <div>

          <div className="productsheader">
            <PriceSorter sorter={this.handleSelectChange}/>
            <h5 >Meat</h5>
          </div>

          <div className="productsboxed">
            <div>
              <Filter/>
            </div>
            {searchItems.length === 0 ? listItems : searchItems}
          </div>

        </div>
      </div>

    );
  }
}

Meat.propTypes = {
    onAdd : PropTypes.func,
    onRemove : PropTypes.func,
    onSearch : PropTypes.string
}
