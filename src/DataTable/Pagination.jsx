import React from 'react';
import PropTypes from 'prop-types';

import PaginationButton from './PaginationButton';

const Pagination = ({currentPageNumber, numberOfPages, onChangePage}) =>
  numberOfPages >= 1 && (
    <ul className='pagination'>
      {[...new Array(numberOfPages)].map((_, pageNumber) => (
        <PaginationButton
          key={pageNumber}
          isActive={currentPageNumber === pageNumber}
          pageNumber={pageNumber}
          onClick={onChangePage}
        />
      ))}
    </ul>
  );

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
