import React from 'react';

import PaginationButton from './PaginationButton';

const Pagination = ({currentPageNumber, totalNumberOfPages, onChange}) => {
  const pages = Array.from(
    Array(totalNumberOfPages).keys()
  ).map((pageNumber) => (
    <PaginationButton
      key={pageNumber}
      isActive={currentPageNumber === pageNumber}
      pageNumber={pageNumber}
      onClick={onChange}
    />
  ));

  if (pages.length <= 1) {
    return null;
  }
  return <ul className='pagination'>{pages}</ul>;
};

export default Pagination;
