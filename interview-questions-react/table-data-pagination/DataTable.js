import React, { useState } from 'react';
import './styles.css';

function DataTable({ data }) {
  const [selectedOption, setSelectedOption] = useState(5);
  const [page, setPage] = useState(1);

  const handleChange = (event) => {
    setSelectedOption(Number(event.target.value));
    setPage(1); // Reset to first page when page size changes
  };

  const startIndex = (page - 1) * selectedOption;
  const endIndex = startIndex + selectedOption;
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / selectedOption);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <h1>Data Table</h1>
      <table className="table-body">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="footer-part"
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div className="total-page">
          <button onClick={prevPage} disabled={page === 1}>
            Previous
          </button>
          <span>
            {' '}
            Page {page} of {totalPages}{' '}
          </span>
          <button onClick={nextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
        <div className="row-page">
          <label>
            Rows per page:{' '}
            <select value={selectedOption} onChange={handleChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
