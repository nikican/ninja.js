import React from 'react';
import PropTypes from 'prop-types';

import PaginationButton from './PaginationButton';

const Pagination = ({currentPageNumber, numberOfPages, onChange}) =>
  numberOfPages >= 1 && (
    <ul className='pagination'>
      {[...new Array(numberOfPages)].map((_, pageNumber) => (
        <PaginationButton
          key={pageNumber}
          isActive={currentPageNumber === pageNumber}
          pageNumber={pageNumber}
          onClick={onChange}
        />
      ))}
    </ul>
  );

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
