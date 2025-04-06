import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
      <div className={styles.header}>
        <Link to='/' className={styles.headerLink}>
          Main
        </Link>
        <Link to='/catalog' className={styles.headerLink}>
          Catalog
        </Link>
        <Link to='/favorites' className={styles.headerLink}>
          Favorites
        </Link>
      </div>
    </div>
  );
}

export default Header