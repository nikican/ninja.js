import React from 'react';
import PropTypes from 'prop-types';

const PaginationButton = ({pageNumber, isActive, onClick}) => {
  const handleClick = () => {
    onClick(pageNumber);
  };

  return (
    <li className='page-item mr-1'>
      <button
        className={`page-link ${isActive ? 'button-outline' : ''}`}
        onClick={handleClick}
      >
        {pageNumber + 1}
      </button>
    </li>
  );
};

PaginationButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationButton;
