import Select from '../../components/Select/Select';
import { SelectOption } from '../../types/types';
import { useCategories } from '../../shared/hooks/useCategories';


type FiltersProps = {
  onCategoryChange: (param: string) => void;
  onSortChange: (param: string) => void;
  categorySelectedValue: string;
  sortSelectedValue: string;
};

export default function Filters({
  onCategoryChange,
  categorySelectedValue,
  sortSelectedValue,
  onSortChange,
}: FiltersProps) {
  const { categories } = useCategories();

  const categoryOptions = categories.map(
    (category): SelectOption => ({
      value: category.slug,
      label: category.name,
    })
  );
  categoryOptions.unshift({ value: 'all', label: 'All' });

  // const brandOptions = brands.map(
  //   (brandOption): SelectOption => ({
  //     value: brandOption.toLowerCase(),
  //     label: brandOption,
  //   })
  // );
  // brandOptions.unshift({value: 'all', label: 'All'})

  const sortOptions = [
    {
      label: 'Default',
      value: 'default',
    },
    {
      label: 'Price: low to high',
      value: 'price-asc',
    },
    {
      label: 'Price: high to low',
      value: 'price-desc',
    },
    {
      label: 'Rating: low to high',
      value: 'rating-asc',
    },
    {
      label: 'Rating: high to low',
      value: 'rating-desc',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem',
      }}
    >
      <Select
        options={categoryOptions}
        name='Category'
        onChange={onCategoryChange}
        selectedValue={categorySelectedValue}
      />
      <Select
        options={sortOptions}
        name='Sort by'
        onChange={onSortChange}
        selectedValue={sortSelectedValue}
      />
    </div>
  );
}
