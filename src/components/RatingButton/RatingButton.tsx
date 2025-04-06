type RatingButtonProps = {
  rating: string | number,
  reviewsQty: string | number
}

const RatingButton = ({ rating, reviewsQty} : RatingButtonProps) => {
  return (
    <div style={{display: 'flex', gap: '8px'}}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='gold'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z' />
        </svg>
        {rating}
      </div>
      <button
        style={{
          background: 'none',
          border: 'none',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          fontFamily: 'inherit',
          cursor: 'pointer',
        }}
      >
        {reviewsQty} reviews
      </button>
    </div>
  );
}

export default RatingButton