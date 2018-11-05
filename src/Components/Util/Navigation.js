import React from 'react';
import {Link} from 'react-router-dom';

 const Navigation = () => {


  return(

    <div className="Navigation">

      <div className="navdown">
        <button className="navbtn">Home</button>
        <div className="navdown-content">
          <Link to='/'>All Products</Link>
        </div>

      </div>

      <div className="navdown">

        <button className="navbtn">Vegetables</button>
        <div className="navdown-content">
          <Link to='/fruits'>Fruits</Link>
          <Link to='/organic'>Organic Vegetables</Link>
        </div>

      </div>

      <div className="navdown">

        <button className="navbtn">Dairy</button>
        <div className="navdown-content">
          <Link to='/milk'>Milk</Link>
          <Link to='/meat'>Meat</Link>
        </div>

      </div>

      <div className="navdown">

        <button className="navbtn">Beverages</button>
        <div className="navdown-content">
          <Link to='/tea'>Tea</Link>
          <Link to='/coffee'>Coffee</Link>
        </div>

      </div>

    </div>)

  }

export default Navigation
