import { Configuration, OpenAIApi } from "openai";
import { Constants } from "./Constants";
const configuration = new Configuration({
    apiKey:  process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const getQueryResultFromGPT = async ({inputQuery}) => { 
  console.log("Fetching Answer from ChatGPT ", inputQuery);
  const chat_result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [Constants.GPT_SYSTEM_PROMPT,{ role: "user", content: inputQuery }],
  });
  console.log("Answer to the query is - ",chat_result);
  return chat_result;
};



export default getQueryResultFromGPT;