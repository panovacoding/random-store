import styles from './ProductList.module.css';
import Section from '../../../components/Section/Section';
import ProductCard from '../../../widgets/ProductCard/ProductCard';
import { Product } from '../../../types/types';
import Filters from '../../../widgets/Filters/Filters';
import Loader from '../../../components/Loader/Loader';

type ProductListProps = {
  products: Product[];
  isLoading?: boolean;
  sectionTitle: string;
  isWithFilters?: boolean;
  onCategoryChange?: (param: string) => void;
  categorySelectedValue?: string;
  onSortChange?: (param: string) => void;
  sortSelectedValue?: string;
};

const ProductList = ({
  products,
  isLoading,
  sectionTitle,
  isWithFilters = false,
  onCategoryChange,
  categorySelectedValue,
  onSortChange,
  sortSelectedValue,
}: ProductListProps) => {
  return (
    <Section title={sectionTitle}>
      {isWithFilters &&
        onCategoryChange &&
        categorySelectedValue &&
        onSortChange &&
        sortSelectedValue && (
          <Filters
            onCategoryChange={onCategoryChange}
            categorySelectedValue={categorySelectedValue}
            onSortChange={onSortChange}
            sortSelectedValue={sortSelectedValue}
          />
        )}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          {products.map((el) => (
            <ProductCard product={el} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default ProductList