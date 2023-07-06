const TotalDataByField = ({data, sortByField})=>{


    const totalCountChartData = data.reduce((acc, item) => {
        const field = item[sortByField];
        if (!acc[field]) {
          acc[field] = { field, count: 0 };
        }
        acc[field].count++;
    
        return acc;
      }, {});
    let avg_data = {
        fields: [],
        count:[],
    };
    for(let element in totalCountChartData){
        avg_data["fields"].push(element);
        avg_data["count"].push(totalCountChartData[element]["count"]);
    };
    return avg_data;

}

export default TotalDataByField;