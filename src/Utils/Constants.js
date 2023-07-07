export  const Constants = {
    ELEMENTS: "elements",
    FIELDS: "fields",
    BACKGROUND_COLORS: [
        'rgba(255, 99, 132, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
        // 'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(201, 203, 207, 0.2)'
      ],
    BORDER_COLORS : [
        'rgb(255, 99, 132)',
        // 'rgb(255, 159, 64)',
        // 'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        // 'rgb(54, 162, 235)',
        // 'rgb(153, 102, 255)',
        // 'rgb(201, 203, 207)'
      ],
      DROPDOWN_FIELDS: {
        employee_residence: "Country",
        salary_in_usd: "Salary in USD",
        job_title: "Job Title",
        employment_type: "Employement Type",
        salary: "Salary",
        salary_currency: "Salary Currency",
        work_year: "Work Year",
        experience_level: "Experience Level",
        company_location: "Company Location",
        company_size: "Company Size",
        remote_ratio : "Remote Ratio",        
      },
      AVERAGE_SALARY_GRAPHS: {
        employee_residence: "Employee Country",
        job_title: "Job Title",
        employment_type: "Employement Type",
        work_year: "Work Year",
        experience_level: "Experience Level",
        company_location: "Company Location",
        company_size: "Company Size",
        remote_ratio : "Remote Ratio",   
      },
      EMPLOYEE_LOCATION_GRAPHS: {
        employee_residence: "Employee Country",
        company_location: "Company Location",
      },
      EMPLOYEE_LOCATION_FILTERS: {
        employee_residence: "Employee Country",
        job_title: "Job Title",
        employment_type: "Employement Type",
        work_year: "Work Year",
        experience_level: "Experience Level",
        company_location: "Company Location",
        company_size: "Company Size",
        remote_ratio : "Remote Ratio",   
      },
      EMPLOYEE_INSIGHTS_BY:{
        employee_residence: "Employee Country",
        job_title: "Job Title",
        employment_type: "Employement Type",
        work_year: "Work Year",
        experience_level: "Experience Level",
        company_location: "Company Location",
        company_size: "Company Size",
        remote_ratio : "Remote Ratio",  
      },
      GPT_SYSTEM_PROMPT:{
        role: 'system',
        content : `we have a data set in which there are 11 fields of an item row as below. - 
        1. work_year: The year the salary was paid.
        2. experience_level: The experience level in the job during the year
        3. employment_type: The type of employment for the role
        4. job_title: The role worked in during the year.
        5. salary: The total gross salary amount paid.
        6. salary_currency: The currency of the salary paid as an ISO 4217 currency code.
        7. salary_in_usd: The salary in USD
        8. employee_residence: Employee's primary country of residence in during the work year as an ISO 3166 country code.
        9. remote_ratio: The overall amount of work done remotely
        10. company_location: The country of the employer's main office or contracting branch
        11. company_size: The median number of people that worked for the company during the year
        I will ask you search query and you have to return the javascript  logical condition to search for the result in our dataset. 
        Append "item." to every field in the final condition
        Do not give any explanation and only return the condition itself`
      },
      CARD_DETAILS: [
        {
          cardTitle: "Search",
          cardText: "Search over all the different parameters of the dataset like Employee Country, Work Year, Job Title etc.",
          cardLink: "/EmployeeDashboard/#/search",
          // imageLink: "https://www.steptwo.com.au/wp-content/uploads/kmc_fixingsearch-W.jpg",
          // imageLink: "https://www.steptwo.com.au/wp-content/uploads/kmc_fixingsearch-W.jpg",
          imageLink: "https://nordvpn.com/wp-content/uploads/blog-social-best-private-search-engines-1200x628-1.png",
        },
        {
          cardTitle: "Search With AI",
          cardText: "Using All new ChatGPT Search over all the different parameters of the dataset like Employee Country, Work Year, Job Title etc.",
          cardLink: "/EmployeeDashboard/#/AISearch",
          // imageLink: "https://searchengineland.com/wp-content/seloads/2023/02/ai-search.jpg"
          imageLink:"https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg?w=1800&t=st=1688727939~exp=1688728539~hmac=37866c2ba042df9c66754976013c45cc6d3d6e1f32dd039bd9d5813e82f47634",
        },
        {
          cardTitle: "Salary Insights",
          cardText: "Salary Trends over different parameters like Work Years, Country, Company Location etc.",
          cardLink: "/EmployeeDashboard/#/salaryinsights",
          // imageLink: "https://jupiter.money/blog/wp-content/uploads/2022/08/128.-Salary-Account.jpg",
          // imageLink: "https://www.searchenginejournal.com/wp-content/uploads/2021/07/seo-salary-report-60e4618f40216-sej.png",
          // imageLink: "https://asksonnie.info/wp-content/uploads/2016/04/Salaries.jpg",
          imageLink: "https://img.freepik.com/free-vector/cash-with-coins-cartoon-style_1308-103063.jpg?w=2000",
        },
        {
          cardTitle: "Employee Locations",
          cardText: "location trends over different parameters like Employee Country, Company Location etc.",
          cardLink: "/EmployeeDashboard/#/locationinsights",
          imageLink: "https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock-1200x808.jpg.webp",
        }, 
        {
          cardTitle: "Employee Insights",
          cardText: "Employee Count Representation over different Parameters like Job Title, Country Location in Graphs.",
          cardLink: "/EmployeeDashboard/#/employeeinsights",
          imageLink: "https://blog.vantagecircle.com/content/images/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png",
        }, 
        
      ],
};
