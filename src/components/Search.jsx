import React from 'react';
import PropTypes from 'prop-types';

const Search = ({onSearch}) => (
  <div className='p-b-1'>
    <input
      type='search'
      className='form-control'
      placeholder='Søg brugere'
      onChange={onSearch}
    />
  </div>
);

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
