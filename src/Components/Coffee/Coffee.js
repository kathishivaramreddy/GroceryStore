import React from 'react';
import PropTypes from 'prop-types';
import allProductsList from '../Data/AllProducts';
import {PriceSorter} from '../PriceSorter/PriceSorter';
import {Filter} from '../Filter/Filter';
import sortBy from 'lodash/sortBy';
import {searchBar} from '../Util/Searchbar';
import {productDisplay} from '../Util/ProductsDisplay';

export class Coffee extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state= {
  //     products: [],
  //   };
  //   this.handleSelectChange = this.handleSelectChange.bind(this);
  // }
  //
  // componentDidMount() {
  //   const productList = allProductsList().products.filter((product) => product.category === 'coffee');
  //   this.setState({products: productList});
  // }
  // handleSelectChange(e) {
  //   const value = e.target.value;
  //   const sortedState = sortBy(this.state.products, function(product) {
  //     return product.price;
  //   });
  //   value ==='low' ? this.setState({products: sortedState}) : this.setState({products: sortedState.reverse()});
  // }

  render() {
    // const {products} = this.state;
    // const {onAdd, onRemove, onSearch} = this.props;
    //
    // const listItems = productDisplay(products, onAdd, onRemove);
    // const searchItems =searchBar(products, onAdd, onRemove,
    //     onSearch);

    return (
      <div>
        
      </div>
    );
  }
}
Coffee.propTypes = {
    onAdd : PropTypes.func,
    onRemove : PropTypes.func,
    onSearch : PropTypes.string
}
