import React from 'react';
import {sortProducts} from '../actions/sortAction';
import {connect} from 'react-redux';
import {PriceSorter} from '../Components/PriceSorter/PriceSorter'

export class PriceSorteRContainer extends React.Component{

  render(){
    return(
    <div>
      <PriceSorter sortProducts={this.props.sortAction}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({

    sortBy : state.sortBy.sortProducts
})

export default connect(mapStateToProps,{sortProducts})(PriceSorter)
