import React, { useState } from 'react';

function SearchWithAIForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({value: searchQuery});
  };

  return (
    		<div className = "m-3">

        <form className="container mt-4 d-flex justify-content-left" onSubmit={handleSubmit}>
                <div className="form-group m-2">
                  <label >
                  Write a query to search:
                  <input
                    className = "form-control"
                    type="text"
                    placeholder="Enter search query"
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                </label>
                </div>
              
              <button className = "btn btn-primary mt-4 mb-2 pv-3 m-2" type="submit">Search</button>
  
        </form>
      </div>
  );
}

export default SearchWithAIForm;
