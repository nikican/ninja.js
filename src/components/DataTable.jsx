import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import Search from './Search';
import TableRenderer from './TableRenderer';
import TableItemRenderer from './TableItemRenderer';

const DataTable = ({
  data,
  rowsPerPage = 40,
  dataDisplay = {
    itemRendererContainer: TableRenderer,
    itemRenderer: TableItemRenderer,
  },
  searchField = 'name1',
}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0); // zero indexed
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [searchText, setSearchText] = useState('');

  const includesSubstringIgnoringCase = (text, substring) =>
    text && text.toLowerCase().includes(substring.toLowerCase());

  const filteredData = (data ?? []).filter((item) =>
    includesSubstringIgnoringCase(item[searchField], searchText)
  );

  useEffect(() => {
    const numberOfPages =
      rowsPerPage <= 0 ? 1 : Math.ceil(filteredData.length / rowsPerPage);

    setNumberOfPages(numberOfPages);
  }, [rowsPerPage, filteredData.length]);

  const search = ({target}) => {
    const text = target.value;

    setSearchText(text);
    setCurrentPageNumber(0);
  };

  const changePage = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const {
    itemRenderer: ItemRenderer,
    itemRendererContainer: ItemRendererContainer,
  } = dataDisplay;

  return (
    <div>
      <Search onSearch={search} />
      {filteredData.length > 0 ? (
        <>
          <ItemRendererContainer>
            {filteredData
              .slice(
                currentPageNumber * rowsPerPage,
                currentPageNumber * rowsPerPage + rowsPerPage
              )
              .map((row) => (
                <ItemRenderer key={row.per_id} {...row} />
              ))}
          </ItemRendererContainer>
          <Pagination
            currentPageNumber={currentPageNumber}
            numberOfPages={numberOfPages}
            onChangePage={changePage}
          />
        </>
      ) : (
        <div>No data.</div>
      )}
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
};

export default DataTable;
