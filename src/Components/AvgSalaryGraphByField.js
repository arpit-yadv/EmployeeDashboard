import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm';
import AverageSalaryByField from '../Utils/AvgDataParser';
import LineChart from './LineChart';
import { Constants } from '../Utils/Constants';
import BarGraph from './BarGraph';



const AvgSalaryGraphByField = ({data, sortByField, sortText}) => {
    const [graphData, setGraphData] = useState("");
    const [finalData, setFinalData] = useState(data);
    const [graphType, setGraphType] = useState("Line");
    

    function dataToChartData({avg_data}){
      const chartData = {
          labels: avg_data[Constants.FIELDS],
          datasets: [
              {
                label: 'Average Salary over ' + sortText,
                data: avg_data[Constants.ELEMENTS],
                fill: false,
                tension: 0.1,
                backgroundColor: Constants.BACKGROUND_COLORS,
                borderColor: Constants.BORDER_COLORS,
                borderWidth: 1
              },
            ],
      };
      return chartData;
  }

    useEffect(()=>{
        const fetchData = async ()=>{
            const graphData1 = await AverageSalaryByField({data: finalData, sortField:sortByField});
            const graphData2 = dataToChartData({avg_data: graphData1});
            setGraphData(graphData2);

        }
        fetchData();

    },[finalData]);
    const handleFilter = async (field, value) => {
      const filteredResults = data.filter(item =>{
          return item[field]? item[field].toLowerCase().includes(value.toLowerCase()): false;
      }
        
      );
      setFinalData(filteredResults);

    };

    const getGraph = ()=>{
      return graphType=="Line" ? <LineChart chartData={graphData}/>: 
          <BarGraph chartData={graphData}/>
    }

    const taggleGraphType = () => {
      graphType=="Line"?setGraphType("Bar"):setGraphType("Line");

    };

  return (
    <div className = "m-4 border border-dark border-secondary rounded " >
      
      <h2>Average Salary over {sortText}</h2>
      <button className="btn btn-primary m-1" onClick={taggleGraphType}>Change Graph Type</button>
      {graphData && getGraph()}
      {graphData  &&
      <SearchForm onSearch={handleFilter} fieldOptions = {Constants.AVERAGE_SALARY_GRAPHS}/>
      }


    </div>
  )
}

export default AvgSalaryGraphByField;
