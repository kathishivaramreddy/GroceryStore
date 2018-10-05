import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import fetch from 'jest-fetch-mock';
import { getProducts }  from './AmbrosiaClient';

global.fetch = fetch;

describe("Http client", () => {


  test('should make call to ambrosia and return response', async () => {
    const expectedProducts = {
      products: [{ name: 'apple' }]
    }
    fetch.mockResponseOnce(JSON.stringify(expectedProducts));

    const products = await getProducts();
    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/products");
    expect(products).toEqual(expectedProducts);

  });
})
