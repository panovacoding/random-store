import styles from './ProductList.module.css';
import Section from '../Section/Section';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../types/types';
import { ReactNode } from 'react';

type ProductListProps = {
  products: Product[];
  sectionTitle: string;
  children?: ReactNode;
}

const ProductListPreview = ({products, sectionTitle, children} : ProductListProps) => {



  return (
    <Section title={sectionTitle}>
      {children}
      <div className={styles.grid}>
          {products.map((el) => (
            <ProductCard product={el}/>
          ))}
        </div>
    </Section>
  );
}

export default ProductListPreview