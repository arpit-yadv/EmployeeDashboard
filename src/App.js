import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import fetchData1 from './Utils/CsvParser';
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
      const csvData1 = await fetchData1({csvData});
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
            <Route path="EmployeeDashboard/#/" element={ <DashboardScreen/> } />
            <Route path="EmployeeDashboard/#/salaryinsights" element={ <HomePage data = {data} />  } />
            <Route path="EmployeeDashboard/#/locationinsights" element={ <EmployeeLocationGraphs data = {data} />  } />
            <Route path="EmployeeDashboard/#/search" element={ <SearchPage data = {data}/>} />
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
