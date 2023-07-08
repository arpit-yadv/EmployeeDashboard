import React from 'react';
import './SearchResults.css'
import SearchResultsTable from './SearchResultsTable';

const SearchResults = ({
  results,
  currentPage,
  resultsPerPage,
  totalResults,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handlePageChange = page => {
    if (page < 1 || page > totalPages) {
      return;
    }
    onPageChange(page);
  };


  return (
    <div data-testid = "search-results" className="search-results">
    <h3>Results</h3>
      <SearchResultsTable results={results}/>
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  </div>
  );
};

export default SearchResults;
