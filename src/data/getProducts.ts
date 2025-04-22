import { Product } from '../types/types';

type ProductsResponse = {
  products: Product[];
  total: number;
};

type GetProductsParams = {
  skip?: number;
  limit?: number;
  category?: string;
  brand?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
};

const getProducts = async ({
  skip = 0,
  limit = 30,
  category,
  brand,
  sortBy = 'title',
  order = 'desc',
}: GetProductsParams): Promise<ProductsResponse> => {

  let url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}`;

  if(category) {
    
    if(category === 'all') {
      url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}`;
    } else {
      url = `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}`;
    }

  }

  console.log(brand)

  // if(brand) {
  //   url = `https://dummyjson.com/products/search?q=${encodeURIComponent(brand)}`;
  //   console.log(encodeURIComponent(brand))
  // }

  try {
    const res = await fetch(url);

    if (res.ok) {
      const resParsed = await res.json();
      return {
        products: resParsed.products,
        total: resParsed.total,
      };
    }
  } catch (err) {
    console.log(err);
  }

  return { products: [], total: 0 };
};

export default getProducts;
