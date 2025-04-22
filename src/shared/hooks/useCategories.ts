import { useState, useEffect } from 'react';
import getCategories from '../../data/getCategories';
import { Category } from '../../types/types';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch categories')
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [])

  return {categories, loading, error}
}