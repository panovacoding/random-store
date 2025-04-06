import styles from './Review.module.css';
import { humanizeDate } from '../../utils/utils';

type ReviewProps = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

const Review = ({
  rating,
  comment,
  date,
  reviewerName,
  reviewerEmail,
}: ReviewProps) => {
  return (
    <div className={styles.review}>
      <div className={styles.review__rating}>
        <div>
          {Array.from({ length: rating }).map(() => (
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='gold'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z' />
            </svg>
          ))}
        </div>
        {rating}
      </div>
      <div className={styles.review__text}>{comment}</div>
      <div className={styles.review__date}>{humanizeDate(date)}</div>
      <div className={styles.review__name}>{reviewerName}</div>
      <div className={styles.review__wmail}>{reviewerEmail}</div>
    </div>
  );
};

export default Review