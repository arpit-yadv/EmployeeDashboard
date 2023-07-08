import React from 'react';
import { Constants } from '../../Utils/Constants';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchResultsTable({results}) {

  function generateKey() {
    return Math.random().toString(36).substr(2, 9);
  }

  return (

    <div>
       <table className="table table-striped">
      <thead>
        <tr>
        {Object.entries(Constants.DROPDOWN_FIELDS).map(([key, value]) => (
									<th key = {generateKey()}>{value}</th>
				))}

        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            {Object.entries(Constants.DROPDOWN_FIELDS).map(([key, value]) => (
									<td key = {generateKey()} >{result[key]}</td>
				))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
