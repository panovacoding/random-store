import { ReactNode } from 'react';
import styles from './CharacteristicItem.module.css';

type CharacteristicItemProps = {
  name: string,
  value: string | number | ReactNode;
}

const CharacteristicItem = ({name, value}: CharacteristicItemProps) => {
  return (
    <div className={styles.characteristicItem}>
      <div style={{ fontWeight: '500', width: '150px' }}>{name}</div>
      <div style={{ fontSize: '18px' }}>{value}</div>
    </div>
  );
}

export default CharacteristicItem