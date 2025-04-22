import { useState, useEffect } from 'react';
import { Product } from '../../types/types';
import getSingleProduct from '../../data/getSingleProduct';

type UseFavoriteProductsParams = {
  ids: number[]
}

export const useFavoriteProducts = ({ids} : UseFavoriteProductsParams) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(!ids.length) {
      setProducts([]);
      return;
    }

    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        const products = await Promise.all(
          ids.map((id) => getSingleProduct(id))
        );
        setProducts(products);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [ids]);

  return { products, loading, error };
};
