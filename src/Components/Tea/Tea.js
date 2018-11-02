import React from 'react';
import PropTypes from 'prop-types';
import allProductsList from '../Data/AllProducts';
import {PriceSorter} from '../PriceSorter/PriceSorter';
import {Filter} from '../Filter/Filter';
import {searchBar} from '../Util/Searchbar';
import {productDisplay} from '../Util/ProductsDisplay';
import sortBy from 'lodash/sortBy';

export class Tea extends React.Component {


  render() {
    // const {products} = this.state;
    // const {onAdd, onRemove, onSearch} = this.props;
    //
    // const listItems = productDisplay(products, onAdd, onRemove);
    //
    // const searchItems =searchBar(products, onAdd, onRemove,
    //     onSearch);

    return (
      <div>
        
      </div>
    );
  }
}
Tea.propTypes = {
    onAdd : PropTypes.func,
    onRemove : PropTypes.func,
    onSearch : PropTypes.string
}
