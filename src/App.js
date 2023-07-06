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
    <div className="App d-flex justify-content-center" >
      <div style={{width: "80%", hieght: "100vh"}}>
        <HashRouter>
          <Routes >
            <Route path="/" element={ <DashboardScreen/> } />
            <Route path="salaryinsights" element={ <HomePage data = {data} />  } />
            <Route path="locationinsights" element={ <EmployeeLocationGraphs data = {data} />  } />
            <Route path="search" element={ <SearchPage data = {data}/>} />
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
