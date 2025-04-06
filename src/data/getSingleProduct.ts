import { Product } from '../types/types';

const getSingleProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (res.ok) {
      const resParsed = await res.json();
      return resParsed;
    }
  } catch (err) {
    console.log(err);
  }

  return null;
};

export default getSingleProduct;
