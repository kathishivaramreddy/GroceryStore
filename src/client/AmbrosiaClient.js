export const getProducts = () => {
  return fetch('http://localhost:8080/products')
  .then( (resp) => {
    return resp.json();
  }).then((json) => {
    return json.products;
  }).catch((error) => console.log('parsing failed',error))
};
