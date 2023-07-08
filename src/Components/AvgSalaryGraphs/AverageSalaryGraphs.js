import React from 'react'
import { Constants } from '../../Utils/Constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvgSalaryGraphByField from './AvgSalaryGraphByField';


export default function AverageSalaryGraphs({data}) {

    function generateKey() {
      return Math.random().toString(36).substr(2, 9);
    }


  return (
    <div  >
        <h1 className='m-4'>AverageSalary Graphs</h1>
        <div>
          {data && Object.entries(Constants.AVERAGE_SALARY_GRAPHS).map(([key,value])=>{
                return <AvgSalaryGraphByField key = {generateKey()} data = {data} sortByField = {key} sortText = {value}/>
              })}
        </div >


    </div>
  )
}
