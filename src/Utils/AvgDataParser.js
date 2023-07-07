const AverageSalaryByField = ({data, sortField})=>{

    const avgSalaryChartData = data.reduce((acc, item) => {
        const field = item[sortField];
        const salary = item.salary_in_usd;
        if(!field)return acc;
        if (!acc[field]) {
          acc[field] = { field: field, count: 0, avg_salary: 0 };
        }
        acc[field].count++;
        acc[field].avg_salary= acc[field].avg_salary + (salary - acc[field].avg_salary)/acc[field].count;
    
        return acc;
      }, {});
    let avg_data = {
        fields: [],
        elements:[],
    };

    for(let element in avgSalaryChartData){
        avg_data["fields"].push(element);
        avg_data["elements"].push(avgSalaryChartData[element]["avg_salary"]);
    };
    return avg_data;

}

export default AverageSalaryByField;