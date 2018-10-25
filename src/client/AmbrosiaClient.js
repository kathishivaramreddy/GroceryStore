export function fetchProducts(){
	return function(dispatch){
    	return fetch('http://localhost:8080/products ')
      		.then((response) => response.json)
    		.then((productList ) => dispatch(
          {
          type:'FETCH_PRODUCTS',
          payload:productList.products }
        	) )
    }
}
