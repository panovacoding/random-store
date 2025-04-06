import styles from './CategoryItem.module.css';

type CategoryItemProps = {
  img: string,
  text: string
}

const CategoryItem = ({img, text} : CategoryItemProps) => {
  return (
    <div className={styles.categoryItem}>
      <img className={styles.categoryItem__image} src={img} alt="" />
      <div className={styles.categoryItem__text}>
        {text}
      </div>
    </div>
  )
}

export default CategoryItem