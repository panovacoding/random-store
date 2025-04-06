import FavoriteButton from '../FavoriteButton/FavoriteButton';
import styles from './ProductCard.module.css';
import { Product } from '../../types/types';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  product: Product
}

const ProductCard = ({product} : ProductCardProps) => {

  const { id, thumbnail, title, price, brand } = product;

  return (
    <div className={styles.productCard} key={id}>
      <img
        className={styles.productCardImage}
        src={thumbnail}
        alt={title}
      />
      <Link to={`/catalog/${id}`} className={styles.productCardLink}/>

      <div className={styles.productCardInfo}>
        <div className={styles.productCardTitle}>{title}</div>
        <div className={styles.productCardPrice}>${price}</div>
      </div>
      <div className={styles.productCardDescription}>{brand}</div>
      <FavoriteButton className={styles.productCardFavBtn} />
    </div>
  );
}

export default ProductCard