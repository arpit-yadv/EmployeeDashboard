import React, { useState } from 'react';
import './SearchForm.css';
import 'bootstrap/dist/css/bootstrap.css';

const SearchForm = ({ onSearch, fieldOptions }) => {
  const [field, setField] = useState('');
  const [value, setValue] = useState('');
	const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
		setField(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(field, value);
  };


  return (
		<div className = "m-3">

			<form className="container mt-4 d-flex justify-content-left" onSubmit={handleSubmit}>
							<div className="form-group m-2">
								<label> Select a Field to Search:</label>
									<select className ="form-control ph-4 "  id="dropdown" value={selectedOption} onChange={handleSelectChange}>
											<option className = "defaultoption" value="">-- Select --</option>
											{Object.entries(fieldOptions).map(([key, value]) => (
												<option key={value} value={key}>{value}</option>
											))}
										</select>
									
							</div>
							<div className="form-group m-2">
								<label>
								Value:
								<input
									className = "form-control"
									type="text"
									value={value}
									onChange={e => setValue(e.target.value)}
								/>
							</label>
							</div>
						
						<button className = "btn btn-primary mt-4 mb-2 pv-3 m-2" type="submit">Search</button>

			</form>
		</div>
  );
};

export default SearchForm;
