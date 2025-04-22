import { useDispatch, useSelector } from 'react-redux';
import styles from './FavoriteButton.module.css'
import { RootState } from '../../../store/store';

import { removeFavorite, addFavorite } from '../../../store/reducers/favoriteReducer';

type FavoriteButtonProps = {
  className: string,
  productId: number
}

const FavoriteButton = ({ className, productId }: FavoriteButtonProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(productId);

  const saveFavoritesToLocalStorage = (favorites: number[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  const handleFavoriteClick = () => {
  
    if (isFavorite) {
      dispatch(removeFavorite(productId)); // Удалить из избранного
      saveFavoritesToLocalStorage(favorites.filter(id => id !== productId));
    } else {
      dispatch(addFavorite(productId)); // Добавить в избранное
      saveFavoritesToLocalStorage([...favorites, productId]);
    }
  };

  return (
    <button
      onClick={handleFavoriteClick}
      className={`${styles.favoriteButton} ${className}`}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill={isFavorite ? 'red' : 'none'}
        stroke={isFavorite ? 'red' : 'black'}
        strokeWidth='2'
      >
        <path
          d='M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z'
          fill={isFavorite ? 'red' : 'white'}
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;
