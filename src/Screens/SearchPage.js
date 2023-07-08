import React, { useState } from 'react';
import SearchForm from '../Components/SearchComponents/SearchForm';
import SearchResults from '../Components/SearchComponents/SearchResults';
import './SearchPage.css'; 
import { Constants } from '../Utils/Constants';
import getQueryResultFromGPT from '../Utils/SearchConditionGenerator';
import SearchWithAIForm from '../Components/SearchComponents/SearchWithAIForm';


const SearchPage = ({ data, isAI }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(20);

  const handleSearch = async ({field, value}) => {
    let filteredResults;
    if(isAI){
      const inputQuery = value;
      const result = await getQueryResultFromGPT({inputQuery});
      let condition = null;
      if(result && result.data && result.data.choices && result.data.choices.length){
        const choice = result.data.choices[0];
        condition = choice.message.content;
      }
      console.log("Condition fetched from chat gpt is - ", condition);
      console.log("Result fro the query is - ", inputQuery, result);
      // condition = 'item.salary_in_usd > 15000 && item.employee_residence === "ES"';
      filteredResults = data.filter(item =>{
        return eval(condition);
      });

    } else{  
        filteredResults = data.filter(item =>{
          return item[field]? item[field].toLowerCase().includes(value.toLowerCase()): false;
      });
    }
  
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
    <div className="d-flex justify-content-center ">
      <div>
        {isAI ? <h2>Search With AI</h2> : 
          <h2>Search Page</h2>
        }
        {isAI ? <SearchWithAIForm onSearch = {handleSearch} /> :
          <SearchForm onSearch={handleSearch}  fieldOptions = {Constants.DROPDOWN_FIELDS} text = {"Search"} />
        }
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
    
    
  </div>
  );
};

export default SearchPage;
