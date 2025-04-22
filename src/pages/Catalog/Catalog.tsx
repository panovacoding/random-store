import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../widgets/Header/Header';
import ProductList from '../../features/products/ProductList/ProductList';
import Pagination from '../../components/Pagination/Pagination';
import { useProducts } from '../../shared/hooks/useProducts';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get('page')) || 1; 
  const categoryFromUrl = searchParams.get('category') || '';
  const sortFromUrl = searchParams.get('sort') || 'default';

  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl);
  const [currentPage, setCurrentPage] = useState<number>(pageFromUrl - 1);
  const PRODUCTS_PER_PAGE = 20;

  const handleSearchParams = (page: string) => {
    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.set('page', page);
      return updatedParams;
    });
  }

  const handleCategoryChange = (categoryParam: string) => {
    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.set('category', categoryParam);
      updatedParams.set('page', '1');
      setSelectedCategory(categoryParam);
      return updatedParams
    });
    setCurrentPage(0)
  }

  const sortMap: Record<string, { sortBy: string; order: 'asc' | 'desc' }> = {
    default: { sortBy: 'title', order: 'asc' },
    'price-asc': { sortBy: 'price', order: 'asc' },
    'price-desc': { sortBy: 'price', order: 'desc' },
    'rating-asc': { sortBy: 'rating', order: 'asc' },
    'rating-desc': { sortBy: 'rating', order: 'desc' },
  };

  const { sortBy, order } = sortMap[sortFromUrl] || sortMap['default'];

  const handleSortChange = (sortParam: string) => {
    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.set('sort', sortParam);
      updatedParams.set('page', '1');
      return updatedParams;
    });
    setCurrentPage(0);
  };


  const { isLoading, products, total } = useProducts({
    currentPage,
    productsPerPage: PRODUCTS_PER_PAGE,
    category: categoryFromUrl,
    sortBy,
    order,
  });



  return (
    <>
      <Header />
      <ProductList
        products={products}
        isLoading={isLoading}
        sectionTitle='Catalog'
        isWithFilters={true}
        onCategoryChange={handleCategoryChange}
        categorySelectedValue={selectedCategory || 'all'}
        onSortChange={handleSortChange}
        sortSelectedValue={sortFromUrl || 'default'}
      />
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
