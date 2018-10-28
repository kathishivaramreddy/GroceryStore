import React from 'react';
import {connect} from 'react-redux';
import {searchAction} from '../../actions/searchAction';

class SearchBar extends React.Component {

constructor(props){
  super(props);
}

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

const mapStateToProps = (state) => ({
    searchBy: state.searchBy
})

export default connect(mapStateToProps,{searchAction})(SearchBar)
