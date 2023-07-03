import React, { useEffect, useState } from 'react';
import { parse } from 'papaparse';
import csvData from './ds_salaries.csv';
import AverageSalaryGraphs from '../Components/AverageSalaryGraphs';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(csvData);
        const csvText = await response.text();

        // Parse CSV data here
        // For example, you can use a CSV parsing library like csv-parser or papaparse
        const parsedData = parse(csvText, { header: true }).data;
        // Set the parsed data to the state
        console.log(parsedData);
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <div>Here is another Dashboard</div>
        <div style = {{width: 500}}>
            <AverageSalaryGraphs  data = {data} sortField={"employee_residence"}/>
        </div>
        
      {/* Render your component using the fetched and parsed CSV data */}
    </div>
  );
};

export default MyComponent;
