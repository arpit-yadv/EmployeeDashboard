import React from 'react'
import { Constants } from '../Utils/Constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvgSalaryGraphByField from './AvgSalaryGraphByField';
import EmployeeCountGraphByField from './EmployeeCountGraphByField';


export default function AverageSalaryGraphs({data}) {

    function generateKey() {
      return Math.random().toString(36).substr(2, 9);
    }


  return (
    <div  >
        <h1 className='m-4 text-white'>AverageSalary Graphs </h1>
        {data && Object.entries(Constants.AVERAGE_SALARY_GRAPHS).map(([key,value])=>{
              return <AvgSalaryGraphByField key = {generateKey()} data = {data} sortByField = {key} sortText = {value}/>
            })}
        {data && Object.entries(Constants.EMPLOYEE_INSIGHTS_BY).map(([key,value])=>{
              return <EmployeeCountGraphByField key = {generateKey()} data = {data} sortByField = {key} sortText = {value}/>
            })}


    </div>
  )
}
