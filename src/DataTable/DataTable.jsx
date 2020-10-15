import React, {useEffect, useState} from 'react';
import PropTypes, {string} from 'prop-types';

import Pagination from './Pagination';
import DataTableRow from './DataTableRow';
import Search from './Search';

const DataTable = ({data, locale, rowsPerPage = 40}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [currentPageNumber, setCurrentPageNumber] = useState(0); // zero indexed
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let filteredData = data.filter(
      (item) =>
        item.name1.toLowerCase().includes(searchText.toLowerCase()) ||
        (item.email &&
          item.email.toLowerCase().includes(searchText.toLowerCase()))
    );

    setFilteredData(filteredData);
  }, [searchText, data]);

  useEffect(() => {
    const numberOfPages =
      rowsPerPage === 0 ? 0 : Math.ceil(filteredData.length / rowsPerPage);

    setNumberOfPages(numberOfPages);
  }, [filteredData.length, rowsPerPage]);

  const onSearch = ({target}) => {
    const text = target.value;
    setSearchText(text);
    setCurrentPageNumber(0);
  };

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  return (
    <div>
      <Search onSearch={onSearch} />
      <table>
        <tbody>
          {filteredData
            .slice(
              currentPageNumber * rowsPerPage,
              currentPageNumber * rowsPerPage + rowsPerPage
            )
            .map((row) => (
              <DataTableRow key={row.per_id} {...row} />
            ))}
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        numberOfPages={numberOfPages}
        onChange={changeToPageNumber}
      />
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name1: PropTypes.string.isRequired,
      email: PropTypes.string,
      edit_path: PropTypes.string.isRequired,
      per_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  rowsPerPage: PropTypes.number,
  locale: string,
};

export default DataTable;
