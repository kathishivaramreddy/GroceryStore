import React from 'react';
import {connect} from 'react-redux';
import {searchAction} from '../actions/searchAction';
import {SearchBar} from '../Components/Search/Search'

export class SearchBarContainer extends React.Component {

render() {
  return  (
      <SearchBar searchAction={this.props.searchAction}/>
      )
    }
}

const mapStateToProps = (state) => ({
    searchBy: state.searchBy
})

export default connect(mapStateToProps,{searchAction})(SearchBarContainer)
