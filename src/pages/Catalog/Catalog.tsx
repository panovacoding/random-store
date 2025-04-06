import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import getProducts from '../../data/getProducts';
import { Product } from '../../types/types';

import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get('page')) || 1; // Берем номер страницы из URL

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product[] | []>([]);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(pageFromUrl - 1);

  const PRODUCTS_PER_PAGE = 20;

  const handleSearchParams = (page: string) => {
    setSearchParams({ page })
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const data = await getProducts(
        currentPage * PRODUCTS_PER_PAGE,
        PRODUCTS_PER_PAGE
      );
      setProducts(data.products);
      setTotal(data.total);

      // Загрузка всех изображений товаров
      const imagePromises = data.products.map((product) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = product.thumbnail;
          img.onload = resolve; // Когда изображение загружено, разрешаем промис
        });
      });

      // Когда данные и все изображения загружены
      Promise.all(imagePromises).then(() => {
        setIsLoading(false); // Останавливаем лоадер
      });
    };
    fetchProducts();
  }, [currentPage, searchParams]);
  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductList products={products} sectionTitle='Catalog' />
        </>
      )}
      <Pagination
        paginationLength={Math.ceil(total / PRODUCTS_PER_PAGE)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSearchParams={handleSearchParams}
      />
    </>
  );
};

export default Catalog;
