import { Category } from '../types/types';

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`https://dummyjson.com/products/categories`);

    if (res.ok) {
      const resParsed = await res.json();
      return resParsed as Category[];
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}

export default getCategories;