import Categories from '../../components/Categories/Categories';
import Header from '../../widgets/Header/Header';
import ProductList from '../../features/products/ProductList/ProductList';
import { useProducts } from '../../shared/hooks/useProducts';
import Loader from '../../components/Loader/Loader';

const MainPage = () => {  
   const { isLoading, products } = useProducts({currentPage: 0, productsPerPage: 4});

  return (
    <>
      <Header />
      {
        isLoading ? (
          <Loader />
        ) : (
          <ProductList products={products || []} sectionTitle='Popular' isWithFilters={false} categorySelectedValue=''/>
        )
      }
      <Categories />
    </>
  );
};

export default MainPage;
