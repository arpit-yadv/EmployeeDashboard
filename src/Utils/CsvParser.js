import React from 'react'
import { useEffect } from 'react';

import { parse } from 'papaparse';


        
const fetchData1 = async ({csvData}) => {
    try {
    const response = await fetch(csvData);
    const csvText = await response.text();

    // Parse CSV data here
    // For example, you can use a CSV parsing library like csv-parser or papaparse
    const parsedData = parse(csvText, { header: true }).data;
    return parsedData;
    // Set the parsed data to the state
    } catch (error) {
    console.error('Error fetching CSV data:', error);
    }
};
export default fetchData1;
    
    