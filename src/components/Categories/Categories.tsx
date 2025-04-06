import { useEffect, useState } from 'react';
import getCategories from '../../data/getCategories'
import { Category } from '../../types/types';
import { CategoryIconsMap } from '../../data/categoryIcons';
import CategoryItem from '../CategoryItem/CategoryItem';
import styles from './Categories.module.css'

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
    <div className='container'>
      <h2>Categories</h2>
      <div className={styles.categoriesList}>
        {categories.map((el) => (
          <CategoryItem key={el.slug} img={CategoryIconsMap[el.slug]} text={el.name}/>
        ))}
      </div>
    </div>
  );
}

export default Categories