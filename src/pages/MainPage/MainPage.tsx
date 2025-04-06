import { useState, useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import { Product } from '../../types/types';
import getProducts from '../../data/getProducts';

const MainPage = () => {  
  const [products, setProducts] = useState<Product[] | []>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(0, 4);
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <ProductList products={products} sectionTitle='Popular'/>
      <Categories />
    </>
  );
};

export default MainPage;
