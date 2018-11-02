import React from 'react';
import {sortProducts} from '../actions/sortAction';
import {connect} from 'react-redux';
import {PriceSorter} from '../Components/PriceSorter/PriceSorter'

export class PriceSorterContainer extends React.Component{

  render(){
    return(
    <div>
      <PriceSorter sortProducts={this.props.sortProducts}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({

    sortBy : state.sortBy.sortProducts
})

export default connect(mapStateToProps,{sortProducts})(PriceSorterContainer)
