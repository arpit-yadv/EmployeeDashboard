import React from 'react'
import { Constants } from '../Utils/Constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeCountGraphByField from '../Components/EmployeeCountGraphByField';


export default function EmployeeInsightsPage({data}) {

    function generateKey() {
      return Math.random().toString(36).substr(2, 9);
    }


  return (
    <div  >
      <h2 className='m-4'>Employee Insights</h2>
        {data && Object.entries(Constants.EMPLOYEE_INSIGHTS_BY).map(([key,value])=>{
              return <EmployeeCountGraphByField key = {generateKey()} data = {data} sortByField = {key} sortText = {value}/>
            })}

    </div>
  )
}
