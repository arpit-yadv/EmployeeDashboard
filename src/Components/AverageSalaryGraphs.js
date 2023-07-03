import React from "react";
import LineChart from "./LineChart";

const AverageSalary = ({data, sortField})=>{



    const avgSalaryChartData = data.reduce((acc, item) => {
        const field = item[sortField];
        const salary = item.salary_in_usd;
        if (!acc[field]) {
          acc[field] = { sortField: field, count: 0, avg_salary: 0 };
        }
        acc[field].count++;
        acc[field].avg_salary= acc[field].avg_salary + (salary - acc[field].avg_salary)/acc[field].count;
        // acc[field].avg_salary = acc[field].total_salary/acc[field].count;
        // console.log("count is ", acc[field].count);
    
        return acc;
      }, {});
    const fields = [];
    const avg_salary = [];
    console.log("Type of is - ",typeof(avgSalaryChartData));
    console.log("Average List is - ",avgSalaryChartData);
    for(let element in avgSalaryChartData){
      console.log("element is ",element, avgSalaryChartData[element]["avg_salary"]);
      fields.push(element);
      avg_salary.push(avgSalaryChartData[element]["avg_salary"]);
    };
    console.log(fields);
    console.log(avg_salary);
    // avgSalaryChartData.forEach(element => {
    //     fields.push(element[sortField]);
    //     avg_salary.push(element[total_salary]/element[count]);
    // });

    const chartData = {
        labels: fields,
        datasets: [
            {
              label: 'Average Salary',
              data: avg_salary,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
    }
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return(
      <div>
        <LineChart chartData={chartData} chartOptions={chartOptions}/>
      </div>
    )

}

export default AverageSalary;




  