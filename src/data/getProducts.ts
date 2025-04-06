import { Product } from '../types/types';

type ProductsResponse = {
  products: Product[];
  total: number;
};

const getProducts = async (skip = 0, limit = 30): Promise<ProductsResponse> => {
  try {
    const res = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);

    if (res.ok) {
      const resParsed = await res.json();
      return {
        products: resParsed.products,
        total: resParsed.total
      }
    }
  } catch (err) {
    console.log(err);
  }

  return { products: [], total: 0 };
};

export default getProducts;
