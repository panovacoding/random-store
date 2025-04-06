import styles from './Pagination.module.css';

type PaginationProps = {
  paginationLength: number;
  currentPage: number;
  setCurrentPage: (arg: number) => void;
  setSearchParams: (page: string) => void;
}

const Pagination = ({ paginationLength, currentPage, setCurrentPage, setSearchParams }: PaginationProps) => {

  const handlePaginationButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.dataset.page;
    if (!page) return;

    let newPage = currentPage;

    switch (page) {
      case 'next':
        newPage = currentPage + 1;
        break;
      case 'prev':
        newPage = currentPage - 1;
        break;
      default:
        newPage = +page;
    }

    setCurrentPage(newPage)
    setSearchParams((newPage + 1).toString()); // Записываем в URL
  };

  return (
    <div className='container'>
      <div className={styles.pagination}>
        {currentPage > 2 && (
          <button
            data-page='prev'
            onClick={handlePaginationButton}
            className={styles.pagination__button}
          >
            ←
          </button>
        )}
        {Array.from({
          length: paginationLength > 4 ? 4 : paginationLength,
        }).map((_, i) => {
          let start = currentPage < 2 ? 0 : currentPage - 2;
          if (currentPage === paginationLength - 1) {
            start = currentPage - 3;
          }
          const activeButtonClass = start + i === currentPage ? styles.pagination__button_current : '';
          return (
            <button
              key={start + i}
              className={`${styles.pagination__button} ${activeButtonClass}`}
              data-page={start + i}
              onClick={handlePaginationButton}
            >
              {start + i + 1}
            </button>
          );
        })}
        {currentPage < paginationLength - 1 && (
          <button
            data-page='next'
            onClick={handlePaginationButton}
            className={styles.pagination__button}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination