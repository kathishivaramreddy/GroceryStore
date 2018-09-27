const productDisplay = (products) => {

  const listItems = products.map((data) =>
    <div className="boxed" key={product.name}>
      <img src={product.image} alt=''/><br/>
      {product.name}<br/>
      {product.currency} {product.price}<br/>
      <button className="addBasket" value="Add" onClick={ () => this.props.onClick(data.name, data.currency, data.price)}>Add To Cart </button>
      <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
    </div>)

    return listItems;

}
//passing the props to function ?
