import { ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProps = {
  title: string,
  children: ReactNode
}

const Section = ({title, children} : SectionProps) => {
  return (
    <section className={styles.section}>
      <div className='container'>
        <h2 className={styles.section__title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section