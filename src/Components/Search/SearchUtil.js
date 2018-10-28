export const searchProduct = (search,products) => {
  if (search === ""){
    return products
  }
  else{
     return products.filter(product => product.name.toUpperCase() === search.toUpperCase())
  }
}
