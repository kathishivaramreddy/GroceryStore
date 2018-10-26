import sortBy from 'lodash/sortBy';

export const sorting = (products) => {
  return sortBy(products,function(product){
     return product.price
   })
}

export const sortByPrice = (sort,products) => {

  if(sort === 'LOW'){
    return products = sorting(products)
 }
 else{
   products = sorting(products)
    return products = products.reverse()
  }

}
