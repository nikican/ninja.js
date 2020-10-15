import React, {useState} from 'react';
import DataTable from './DataTable/DataTable';

import './App.css';
import data from './data.json';

const App = () => {
  const [userData] = useState(data['user-data']);
  const [locale] = useState('da');
  const [rowsPerPage] = useState(5);

  return (
    <div className='container mt-3'>
      <DataTable rows={userData} locale={locale} rowsPerPage={rowsPerPage} />
    </div>
  );
};

export default App;
