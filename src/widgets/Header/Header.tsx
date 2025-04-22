import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
      <div className={styles.header}>
        <Link to='/' className={styles.header__link}>
          Main
        </Link>
        <Link to='/catalog' className={styles.header__link}>
          Catalog
        </Link>
        <Link to='/favorites' className={styles.header__link}>
          Favorites
        </Link>
      </div>
    </div>
  );
}

export default Header