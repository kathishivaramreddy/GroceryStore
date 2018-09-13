import React from 'react';
import {Link} from 'react-router-dom'

export class Navigation extends React.Component{

    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
          <div className="dropdown">
            <button className="dropbtn">Vegetables</button>
            <div className="dropdown-content">
              <a href="#">Link 1 </a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Dairy</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Beverages</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
          );
    }
}
