const TotalDataByField = ({data, sortByField})=>{


    const totalCountChartData = data.reduce((acc, item) => {
        const field = item[sortByField];
        if(!field)return acc;
        if (!acc[field]) {
          acc[field] = { field, count: 0 };
        }
        acc[field].count++;
    
        return acc;
      }, {});
    let final_data = {
        fields: [],
        count:[],
    };
    for(let element in totalCountChartData){
        final_data["fields"].push(element);
        final_data["count"].push(totalCountChartData[element]["count"]);
    };
    return final_data;

}

export default TotalDataByField;