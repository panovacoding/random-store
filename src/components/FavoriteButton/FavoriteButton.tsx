import { useState } from 'react';
import styles from './FavoriteButton.module.css'

type FavoriteButtonProps = {
  className: string
}

const FavoriteButton = ({className} : FavoriteButtonProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`${styles.favoriteButton} ${className}`}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill={liked ? 'red' : 'none'}
        stroke={liked ? 'red' : 'black'}
        strokeWidth='2'
      >
        <path d='M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z' />
      </svg>
    </button>
  );
};

export default FavoriteButton;
