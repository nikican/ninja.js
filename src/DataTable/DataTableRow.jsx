import React from 'react';
import PropTypes from 'prop-types';

const DataTableRow = ({edit_path: editPath, name1: name, email}) => (
  <tr>
    <td>
      <a href={editPath}>{name}</a>
      <br />
      <small>{email}</small>
    </td>
  </tr>
);

DataTableRow.propTypes = {
  name1: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  edit_path: PropTypes.string.isRequired,
};

export default DataTableRow;
