import React from 'react';
import DataTable from './components/DataTable';

import './App.css';
import data from './data.json';

const App = () => {
  const userData = data['user-data'];
  const rowsPerPage = 5;

  return (
    <div className='container mt-3'>
      <DataTable
        data={userData}
        rowsPerPage={rowsPerPage}
        searchField='email'
      />
    </div>
  );
};

export default App;
