import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {Fruits } from './Fruits';
import App from './App';

export class Navigation extends React.Component{

    constructor(props){
      super(props);
    }

    render(){
      return(
        <BrowserRouter>
          <div>
            <hr/>
            <div className="dropdown">
              <button className="dropbtn">Vegetables</button>
              <div className="dropdown-content">
                <Link to='/fruits'>Fruits</Link>
                <Link to='organic'>Organic Vegetables</Link>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">Dairy</button>
              <div className="dropdown-content">
                <Link to='/milk'>Milk</Link>
                <Link to='meat'>Meat</Link>

              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">Beverages</button>
              <div className="dropdown-content">
                <Link to='tea'>Tea</Link>
                <Link to='coffee'>Coffee</Link>
              </div>
            </div>
            {/* <Route exact path='/' component ={App}/> */}
            <Route path='/fruits' component={Fruits}/>

          </div>
        </BrowserRouter>
          );
          }
          }
