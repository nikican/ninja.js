import React, {useState} from 'react';
import DataTable from './components/DataTable';

import './App.css';
import data from './data.json';

const App = () => {
  const [userData] = useState(data['user-data']);
  const [rowsPerPage] = useState(5);

  return (
    <div className='container mt-3'>
      <DataTable data={userData} rowsPerPage={rowsPerPage} />
    </div>
  );
};

export default App;
