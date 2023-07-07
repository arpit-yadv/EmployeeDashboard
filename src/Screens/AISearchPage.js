import React from 'react'
import SearchWithAIForm from '../Components/SearchWithAIForm'

export default function AISearchPage() {

  const [searchResults, setSearchResults] = useState("");

  const handleSearch = async (searchQuery) => {
    const inputQuery = value;
      const result = await getQueryResultFromGPT({inputQuery});
      let condition = null;
      if(result && result.data && result.data.choices && result.data.choices.length){
        const choice = result.data.choices[0];
        condition = choice.message.content;
      }
      console.log("Condition fetched from chat gpt is - ", condition);
      console.log("Result fro the query is - ", inputQuery, result);
      // condition = 'item.salary_in_usd > 15000 && item.employee_residence === "ES"';
      const filteredResults = data.filter(item =>{
        return eval(condition);
      });

      setSearchResults(filteredResults);
    // Perform search logic with the searchQuery value
    console.log('Search query:', searchQuery);
    // Replace the console.log with your desired search implementation
  };

  return (
    <div>
      <SearchWithAIForm onSearch={handleSearch}/>
    </div>
  )
}
