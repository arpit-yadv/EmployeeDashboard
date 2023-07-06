import React, { useEffect, useState } from 'react'
import { MapContainer, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import fetchData from '../Utils/CsvParser';
import countryCsvData from './../data/countryToCoordinateMap.csv'
import TotalDataByField from '../Utils/TotalDataParser';
import SearchForm from './SearchForm';
import { Constants } from '../Utils/Constants';

function MapComponent({data1, sortByField, sortText}) {

    const [finalData , setFinalData] = useState({
      city:[],
      minLat: -6.1751,
      maxLat: 55.7558,
      minLong: 37.6173,
      maxLong: 139.6917
  });
  const [filteredData, setFilteredData ] = useState(data1);

    function mapDataBuilder({mapData, countryCoordinatesData}){
        let finalData1= {
            city:[],
            minLat: -6.1751,
            maxLat: 55.7558,
            minLong: 37.6173,
            maxLong: 139.6917
        }
        for(let i in mapData["count"]){
            let currentCountry =mapData["fields"][i]; 
            let employee_count = mapData["count"][i];
            if(currentCountry){
                let countryDetails = countryCoordinatesData.find(country => country["Alpha-2code"] == currentCountry);
                if(countryDetails){
                    let tuple = {name: countryDetails.Country, employees: employee_count, coordinates: [countryDetails["Longitude(average)"],countryDetails["Latitude(average)"]]};
                    finalData1.city.push(tuple);
                }
                
            }
            setFinalData(finalData1);
        }
    }


    useEffect(()=>{
        const fetchMapData = async()=>{
            const countryCoordinatesData = await fetchData({csvData: countryCsvData});
            const countryToEmployeeCount = await TotalDataByField({data: filteredData, sortByField})
            mapDataBuilder({mapData:countryToEmployeeCount, countryCoordinatesData});
        }
        fetchMapData();
    },[filteredData])

    const handleFilter = async (field, value) => {
      const filteredResults = data1.filter(item =>{
          return item[field]? item[field].toLowerCase().includes(value.toLowerCase()): false;
      }
        
      );
      setFilteredData(filteredResults);

    };

    let centerLat = (finalData.minLat + finalData.maxLat) / 2 -15;
    let centerLong = (finalData.minLong + finalData.maxLong) / 2 ;
    return (
        <div className='border border-secondary m-4 rounded'>
          <h3 style={{ textAlign: "center" }}>Employees by {sortText}</h3>
          <div>
          <MapContainer className='mb-1 mt-4 '
            style={{ height: "480px", width: "100%", marginBottom: "200px" }}
            zoom={1}
            center={[centerLat, centerLong]}
          >
            <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  
            {finalData && finalData.city.map((city, k) => {
              return (
                <CircleMarker
                  key={k}
                  center={[city["coordinates"][1], city["coordinates"][0]]}
                  radius={5 * Math.log(city["employees"] *2)}
                  fillOpacity={0.5}
                  stroke={false}
                >
                    <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{city["name"] + ": " + "Employees Count" + " " + city["employees"]}</span>
                </Tooltip>
                </CircleMarker>
                )
            })
            }
          </MapContainer>
          {finalData  &&
      <SearchForm className = "mt-0" onSearch={handleFilter} fieldOptions = {Constants.AVERAGE_SALARY_GRAPHS}/>
      }

          </div>
          
        </div>
    );
  }

  export default MapComponent;
