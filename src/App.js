import React, {useEffect, useState} from 'react';

import ReactDOM from 'react-dom';
import fetchData from './Utils/CsvParser';
import csvData from './data/ds_salaries.csv';
import { Route, Routes, HashRouter } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './Screens/SearchPage';
import './App.css'
import DashboardScreen from './Screens/DashboardScreen';
import EmployeeLocationGraphs from './Components/EmployeeLocationGraphs';
import EmployeeInsightsPage from './Screens/EmployeeInsightsPage';

function App() {

  const [data, setData] = useState("");

  useEffect(()=>{
    const fetchFunction = async ()=>{
      const csvData1 = await fetchData({csvData});
      const filteredData = csvData1.filter((value) => value !== undefined);
      setData(filteredData);
    }
    fetchFunction();
    
  },[]);
  
  return (
    <div className="App d-flex  justify-content-center" >
      <div className='container-fluid'>
        <HashRouter>
          <Routes >
            <Route path="/" element={ <DashboardScreen/> } />
            <Route path="salaryinsights" element={ <HomePage data = {data} />  } />
            <Route path="locationinsights" element={ <EmployeeLocationGraphs data = {data} />  } />
            <Route path="employeeinsights" element={ <EmployeeInsightsPage data = {data} />  } />
            <Route path="search" element={ <SearchPage data = {data} isAI = {false}/>} />
            <Route path="AIsearch" element={ <SearchPage data = {data} isAI = {true} />} />
          </Routes>
        </HashRouter>
      </div>
  </div>
    // <div>
    //   <HomePage/>
    // </div>
  );
}

export default App;
