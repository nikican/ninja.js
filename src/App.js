import React, {useState} from 'react';
import DataTable from './components/DataTable';

import './App.css';
import data from './data.json';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [rowsPerPage] = useState(5);

  return (
    <div className='container mt-3'>
      <DataTable
        data={userData}
        rowsPerPage={rowsPerPage}
        searchField='email'
      />
      <button onClick={() => setUserData(data['user-data'])}></button>
    </div>
  );
};

export default App;
