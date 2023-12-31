import React, {useState, useEffect} from 'react'
import SearchForm from '../SearchComponents/SearchForm';
import AverageSalaryByField from '../../Utils/AvgDataParser';
import LineChart from '../LineChart/LineChart';
import { Constants } from '../../Utils/Constants';
import BarGraph from '../BarGraph/BarGraph';



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
    const handleFilter = async ({field, value}) => {
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
    <div className = "m-auto mb-4 border border-dark border-secondary rounded col-lg-9" >
      
      <h2 data-testid = "average-graph-heading">Average Salary over {sortText}</h2>
      <button data-testid = "change-graph-button" className="btn btn-primary m-1" onClick={taggleGraphType}>Change Graph Type</button>
      {graphData && getGraph()}
      {graphData  &&
      <SearchForm onSearch={handleFilter} fieldOptions = {Constants.AVERAGE_SALARY_GRAPHS}/>
      }

    </div>
  )
}

export default AvgSalaryGraphByField;
