import { Product } from '../types/types';

const getSingleProduct = async (id: string | number): Promise<Product> => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch product with id ${id}`);
    }

    const resParsed = await res.json();
    return resParsed;
  } catch (err) {
    console.error(err);
    throw err; 
  }
};


export default getSingleProduct;
