import React from 'react'
import { Constants } from '../../Utils/Constants';
import EmployeeByCountryMap from './EmployeeByCountryMap';

export default function EmployeeLocationGraphs({data}) {
  function generateKey() {
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <div>
      <h2 className='m-4'>Employee Location Graphs </h2>
        {data && Object.entries(Constants.EMPLOYEE_LOCATION_GRAPHS).map(([key,value])=>{
              return <EmployeeByCountryMap key = {generateKey()} data1 = {data} sortByField = {key} sortText= {value}/>
        })}

    </div>
  )
}
