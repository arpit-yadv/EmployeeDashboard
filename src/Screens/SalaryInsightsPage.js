import { useEffect, useState } from 'react';
import fetchData from '../Utils/CsvParser';
import csvData from '../data/ds_salaries.csv';
import AverageSalaryGraphs from '../Components/AvgSalaryGraphs/AverageSalaryGraphs';


function HomePage() {
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
    <div className="App">
      <header className="App-header text-black">
        <div style = {{width: "100%"}}>
          {data && <AverageSalaryGraphs data = {data}/>}
        </div>
        
      </header>
    </div>
  );
}

export default HomePage;
