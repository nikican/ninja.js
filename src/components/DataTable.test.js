import React from 'react';
import {mount} from 'enzyme';

import DataTable from './DataTable';

const mockData = [
  {
    name1: 'Mads L. Klausen',
    email: 'MadsLKlausen@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 1,
  },
  {
    name1: 'Alfred K. Krogh',
    email: 'AlfredKKrogh@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 2,
  },
  {
    name1: 'Silas L. Bertelsen',
    email: 'SilasLBertelsen@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 3,
  },
  {
    name1: 'Mia A. Johnsen',
    email: 'MiaAJohnsen@dayrep.com',
    edit_path: 'http://google.com',
    per_id: 4,
  },
  {
    name1: 'Alfred S. Schou',
    email: 'AlfredSSchou@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 5,
  },
];

describe('DataTable', () => {
  it('renders wihtout crashing with no data', () => {
    mount(<DataTable data={[]} />);
  });

  it('renders 5 rows when rowsPerPage is 5', () => {
    const wrapper = mount(<DataTable rowsPerPage={5} data={mockData} />);

    expect(wrapper.find('tr')).toHaveLength(5);
  });

  it('renders 1 pagination item when number of rows equals the size of data', () => {
    const wrapper = mount(
      <DataTable rowsPerPage={mockData.length} data={mockData} />
    );

    expect(wrapper.find('ul.pagination')).toHaveLength(1);
  });

  it('renderes filtered data based on input', () => {
    const wrapper = mount(<DataTable rowsPerPage={5} data={mockData} />);

    wrapper.find('input').simulate('change', {target: {value: 'b'}});
    expect(wrapper.find('tr')).toHaveLength(1);
  });

  it('renders correct number of pages', () => {
    const rowsPerPage = 1;

    const wrapper = mount(
      <DataTable rowsPerPage={rowsPerPage} data={mockData} />
    );

    expect(wrapper.find('li.page-item')).toHaveLength(
      Math.ceil(mockData.length / rowsPerPage)
    );
  });
});
