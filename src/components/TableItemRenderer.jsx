import React from 'react';
import PropTypes from 'prop-types';

const TableItemRenderer = ({edit_path: editPath, name1: name, email}) => (
  <tr>
    <td>
      <a href={editPath} target='_blank' rel='noopener noreferrer'>
        {name}
      </a>
      <br />
      <small>{email}</small>
    </td>
  </tr>
);

TableItemRenderer.propTypes = {
  name1: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  edit_path: PropTypes.string.isRequired,
};

export default TableItemRenderer;
