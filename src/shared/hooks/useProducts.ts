import { useEffect, useState } from 'react';
import { Product } from '../../types/types';
import getProducts from '../../data/getProducts';

type UseProductsParams = {
  currentPage: number;
  productsPerPage: number;
  category?: string;
  brand?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  getAll?: boolean;
};

export const useProducts = ({
  currentPage,
  productsPerPage,
  category,
  brand,
  sortBy,
  order,
  getAll
}: UseProductsParams) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  const handleImageLoad = (data: Product[]) => {
    const imagePromises = data.map((product) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = product.thumbnail;
        img.onload = resolve;
        img.onerror = () => {
          console.warn(
            `Не удалось загрузить изображение: ${product.thumbnail}`
          );
          resolve(null); 
        };
      });
    });
    Promise.all(imagePromises).then(() => setIsLoading(false));
  };

  const fetchProducts = async () => {
    setIsLoading(true);

    try {
      const data = await getProducts({
        skip: getAll ? 0 : currentPage * productsPerPage,
        limit: getAll ? 0 : productsPerPage,
        category,
        brand,
        sortBy,
        order,
      });
      setProducts(data.products);
      setTotal(data.total);
      handleImageLoad(data.products);
    } catch (error) {
      console.error('Failed to fetch products', error)
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, category, brand, sortBy, order]);

  return { isLoading, products, total };
};
