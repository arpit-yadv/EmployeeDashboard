import React, { useState } from 'react';
import SearchForm from '../Components/SearchForm';
import SearchResults from '../Components/SearchResults';
import './SearchPage.css'; 
import { Constants } from '../Utils/Constants';


const SearchPage = ({ data }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(20);

  const handleSearch = (field, value) => {
    const filteredResults = data.filter(item =>{
        return item[field]? item[field].toLowerCase().includes(value.toLowerCase()): false;
    }
      
    );
    setSearchResults(filteredResults);
    setCurrentPage(1);
  };

  const handlePagination = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // Logic for displaying paginated results
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  );


  return (
    <div className="">
    <h2>Search Page</h2>
    <SearchForm onSearch={handleSearch} fieldOptions = {Constants.DROPDOWN_FIELDS} />
    {searchResults.length ?
        <SearchResults
        results={currentResults}
        currentPage={currentPage}
        resultsPerPage={resultsPerPage}
        totalResults={searchResults.length}
        onPageChange={handlePagination}
      /> : <div></div>

    }
    
  </div>
  );
};

export default SearchPage;
