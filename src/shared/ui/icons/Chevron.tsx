type ChevronProps = {
  isRotate: boolean;
  size?: number;
}

export default function Chevron({isRotate, size} : ChevronProps) {
  return (
    <svg
      width={size || 16}
      height={size || 16}
      style={{ rotate: isRotate ? '-180deg' : '0deg', transition: '0.3s' }}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      viewBox='0 0 24 24'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  );
}
