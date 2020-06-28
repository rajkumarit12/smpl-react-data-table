import React from 'react'

import  Datatable  from 'smpl-react-data-table'
import 'smpl-react-data-table/dist/index.css'

const headings = [
  'Product name',
  'SKU',
  'Stock quantity',
  'Wholesale cost',
  'Sale price',
  'Quantity sold',
  'Gross sales',
  'Net sales',
  'Notes',
];

const rows = [
  [
    'Red and black plaid scarf with thin red stripes and thick black stripes',
    124689325,
    28,
    '$35.00',
    '$60.00',
    12,
    '$720.00',
    '$300.00',
    '',
  ],
  [
    'Yellow plaid scarf',
    124689389,
    0,
    '$35.00',
    '$60.00',
    20,
    '$1200.00',
    '$500.00',
    'Currently on back order by the supplier. Do not place another order to restock.',
  ],
  [
    'Blue plaid scarf',
    124689332,
    30,
    '$35.00',
    '$60.00',
    10,
    '$600.00',
    '$250.00',
    '',
  ],
  [
    'Pink plaid scarf',
    124689376,
    16,
    '$35.00',
    '$60.00',
    4,
    '$240.00',
    '$100.00',
    '',
  ],
];

const App = () => {
  return <Datatable headings={headings} rows={rows}  />
}

export default App
