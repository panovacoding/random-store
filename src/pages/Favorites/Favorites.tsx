import Header from '../../widgets/Header/Header';
import ProductList from '../../features/products/ProductList/ProductList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useFavoriteProducts } from '../../shared/hooks/useFavoriteProducts';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

export default function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorites);

  const { products, loading } = useFavoriteProducts({ ids: favorites });

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : products.length ? (
        <ProductList
          products={products}
          isLoading={loading}
          sectionTitle='Favorites'
          isWithFilters={false}
        />
      ) : (
        <div className='container'>
          Your don't have any favorites. Go to{' '}
          <Link to={'/catalog'} style={{ color: 'inherit' }}>
            catalog
          </Link>
        </div>
      )}
    </>
  );
}
