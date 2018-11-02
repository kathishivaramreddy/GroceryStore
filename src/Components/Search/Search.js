import React from 'react';
import {connect} from 'react-redux';
import {searchAction} from '../../actions/searchAction';

export class SearchBar extends React.Component {

handleSearch(event){

    this.props.searchAction(event.target.value)

}

render() {
  return  (
      <div className="searchbar">
        <input className="searchbox" type="search" placeholder="Search for products and more"
          name="search" onChange={this.handleSearch.bind(this)} autoComplete="off"/>
      </div>
      )
    }
}
