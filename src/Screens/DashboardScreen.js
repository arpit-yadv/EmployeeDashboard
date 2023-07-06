import React from 'react'
import Card from '../Components/Card'
import { Constants } from '../Utils/Constants'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardScreen() {
  return (
    <div >
        <h1 className='mt-4 mb-4'>Dashboard</h1>
        <div className = "container">
          <div className='row justify-content-between'>
            {Constants.CARD_DETAILS.map((dataItem,index)=>
            <div key = {dataItem.cardTitle} className= "col-lg-6 mb-4">
                <Card  imageLink={dataItem.imageLink} cardLink={dataItem.cardLink} cardText={dataItem.cardText}
                cardTitle={dataItem.cardTitle}/>
            </div>
              
            )}

          </div>
        </div>
        
    </div>
  )
}
