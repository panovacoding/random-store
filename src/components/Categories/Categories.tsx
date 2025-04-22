import { useEffect, useState } from 'react';
import getCategories from '../../data/getCategories'
import { Category } from '../../types/types';
import { CategoryIconsMap } from '../../data/categoryIcons';
import CategoryItem from '../CategoryItem/CategoryItem';
import styles from './Categories.module.css'
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  
  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      setCategories(data);
      console.log(data)
    }
    getData();
  }, [])

  return (
    <div className='container' style={{marginBottom: '50px'}}>
      <h2>Categories</h2>
      <div className={styles.categoriesList}>
        {categories.map((el) => (
          <Link to={`/catalog?category=${el.slug}`} style={{color: 'black', textDecoration: 'none'}}>
            <CategoryItem key={el.slug} img={CategoryIconsMap[el.slug]} text={el.name}/>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories