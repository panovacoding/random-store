import { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';
import { SelectOption } from '../../types/types';
import Chevron from '../../shared/ui/icons/Chevron';

type SelectProps = {
  options: SelectOption[];
  name: string;
  onChange: (param: string) => void;
  selectedValue: string;
};

const Select = ({options, name, onChange, selectedValue} : SelectProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectOption>({
    value: selectedValue,
    label: options.find((option) => option.value === selectedValue)?.label || 'Choose',
  });

  const handleLabelClick = () => setIsOpen(prev => !prev);

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const newValue = e.currentTarget.dataset.value;
    const newOption = options.find((el) => el.value === newValue);
    if (newOption) {
      setSelected({
        value: newOption.value,
        label: newOption.label
      });
      onChange(newOption.value);
      setIsOpen(false);
    }
  };

  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false); // закрываем селект
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [])

  useEffect(() => {
    const found = options.find((option) => option.value === selectedValue);
    if (found) {
      setSelected({ value: found.value, label: found.label });
    }
  }, [options, selectedValue]);


  return (
    <div className={styles.select} ref={ref}>
      <div className={styles.select__name}>{name}</div>
      <div className={styles.select__label} onClick={handleLabelClick}>
        <div>{selected.label}</div>
        <Chevron isRotate={isOpen}/>
      </div>

      {isOpen && options && (
        <ul className={styles.select__optionList}>
          {options.map(({ value, label }) => (
            <li
              className={`${styles.select__option} ${
                value === selected.value ? styles.active : ''
              }`}
              onClick={handleOptionClick}
              key={value}
              data-value={value}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select